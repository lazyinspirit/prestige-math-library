---
id: lem-temperley-lieb-jones-wenzl-quantum-binomial-criterion-over-fields
kind: lemma
title: "Jones–Wenzl existence over a field is detected by one quantum-binomial row"
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - thm-temperley-lieb-diagram-generators-span
  - lem-temperley-lieb-generators-satisfy-local-relations
  - lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - lem-temperley-lieb-integral-spin-representation-is-split-injective
  - lem-temperley-lieb-quantum-binomial-digit-criterion
  - thm-irreducible-quotient-adjoins-a-root
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ben Elias and Nicolas Libedinsky, Soergel bimodules for universal Coxeter groups, Appendix A by Ben Webster"
      url: "https://arxiv.org/pdf/1401.2467v2"
      locator: "Appendix A, Proposition A.1 and Theorem A.2 with proof, PDF pp. 24–29. The local proof replaces the quantum-group/tilting steps with an explicit integral split injection and word-space kernel calculation."
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§10.3, PDF p. 32: identifies the field criterion with nonvanishing of all quantum binomials and explicitly cites Webster's alternate proof."
---

## Statement

Let $K$ be a field, $\delta\in K$, and $n\ge0$. A normalized idempotent $e\in\mathrm{TL}_n(K,\delta)$ with $d_ie=0$ for $1\le i<n$ exists if and only if every $B_{n,k}(\delta)$ of [[lem-temperley-lieb-quantum-binomial-digit-criterion]], $0\le k\le n$, is nonzero. Every such $e$ also satisfies $ed_i=0$ and is unique. This is a field assertion; it makes no integral-ring descent claim.

## Facts & Assumptions

**Given:** The field, loop parameter, rank, and augmentation $\varepsilon$ given by the coefficient of the identity diagram.

[F1] The diagram algebra is associative, its diagrams form a basis, and the generators satisfy $d_i^2=\delta d_i$, $d_id_{i+1}d_i=d_i$ and distant commutation ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]], [[lem-temperley-lieb-generators-satisfy-local-relations]]).

[F2] Every diagram is a generator word; only an identity diagram can be the empty word ([[thm-temperley-lieb-diagram-generators-span]]). The identity-coefficient augmentation and normalized-idempotent convention are those in [[lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective]].

[F3] The two-letter representation has an integral linear left inverse for all base changes, and the generators are represented by the symmetric middle block $\begin{pmatrix}q&1\\1&q^{-1}\end{pmatrix}$ ([[lem-temperley-lieb-integral-spin-representation-is-split-injective]]).

[F4] The polynomials satisfy $G_{n,k}(q^2)=q^{k(n-k)}B_{n,k}(q+q^{-1})$ and the quantum-factorial identity before specialization ([[lem-temperley-lieb-quantum-binomial-digit-criterion]]).

[F5] A quadratic polynomial can acquire a root in a field extension by taking an irreducible polynomial quotient ([[thm-irreducible-quotient-adjoins-a-root]]).

## Proof

**Given:** A field $K$, loop parameter $\delta\in K$, rank $n\ge0$, and the augmentation from the Statement.

**Convention:** In this item, “normalized” means $\varepsilon(e)=1$, where $\varepsilon$ is the coefficient of the identity diagram as in [[lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective]].

1.1 Propagation cannot increase under stacking, and the identity is the only fully propagating diagram. Hence the nonidentity span is an ideal and the identity-coefficient map $\varepsilon$ is multiplicative. By [F2] its kernel is spanned by nonempty generator words. If $d_i e=0$ and $\varepsilon(e)=1$, [F2] gives $ae=\varepsilon(a)e$ for every $a$, so $e^2=e$ follows already from these linear equations. Reflect diagrams to obtain an algebra anti-involution $*$ fixing the generators and preserving $\varepsilon$: reflection reverses stacking and preserves each loop, so it has these properties by [F1]. Then $f=ee^*$ is annihilated on both sides by every $d_i$, has augmentation $1$, and is idempotent by the first observation. Since $f$ is right annihilated, $fe=\varepsilon(e)f=f$; since $e$ is left annihilated, $fe=\varepsilon(f)e=e$. Thus $e=f$ is itself two-sided. If $e,e'$ are two normalized two-sided annihilators, the same generator-word argument gives $ee'=e$ and $ee'=e'$, proving uniqueness. [F1, F2, given, construct, algebra]

1.2 First suppose $K$ contains a unit $q$ with $\delta=q+q^{-1}$, and put $Q=q^2$. In weight $k$, the word space of [F3] has basis the words with $k$ ones. A vector $\sum a_ww$ is killed by all generators exactly when $a_{u10v}=-q a_{u01v}$ for every adjacent mixed pair. Adjacent swaps connect every such word to $0^{n-k}1^k$, and each swap changes the inversion count by one. Therefore the common kernel is the free line spanned by
$$v_k=\sum_{w}(-q)^{\operatorname{inv}(w)}w,$$
whose coefficient at $0^{n-k}1^k$ is $1$. Its ordinary bilinear square is $v_k^{\mathsf T}v_k=G_{n,k}(Q)$. These calculations apply over every commutative ring containing the unit $q$, including characteristic two. [F3, F4, construct, algebra]

1.3 For the converse construction use first the indeterminate $q$ and $L=\mathbb Q(q)$. Every positive quantum integer is nonzero in $L$. There is a normalized two-sided annihilator $p_n$ over $L$, as the following algebraic induction proves. Start with $p_0=p_1=1$ and $p_2=1-\delta^{-1}d_1$; their identity coefficients are $1$, and the rank-two relations give idempotence and two-sided annihilation. For $r\ge2$, assume $p_{r-1}$ and $p_r$ have been recursively constructed, are idempotent and annihilated on both sides by all generators available at their ranks, and satisfy $\varepsilon(p_{r-1})=\varepsilon(p_r)=1$. Put $P=p_r\otimes1$, $Q_0=p_{r-1}\otimes1\otimes1$, $a=d_{r-1}$, $b=d_r$, and $\mu=[r-1]/[r]$. The preceding recursion says $P=Q_0-\mu Q_0aQ_0$, while $Q_0^2=Q_0$, $PQ_0=Q_0P=P$, $Q_0b=bQ_0$ and $bab=b$. Consequently $bPb=(\delta-\mu)Q_0b=([r+1]/[r])Q_0b$. For $X=PbP$, this gives $X^2=([r+1]/[r])X$. Therefore $p_{r+1}=P-([r]/[r+1])X$ is idempotent, annihilates $b$ on both sides by the displayed sandwich identity, and annihilates every earlier generator because $P$ does. Juxtaposing a vertical strand preserves the identity coefficient, so the leading term $P$ has identity coefficient $\varepsilon(p_r)=1$. Every diagram term of the correction $P b P$ has fewer than $r+1$ propagating strands, since it passes through $b=d_r$ and stacking cannot increase the number of propagating strands; hence that correction has identity coefficient zero. Thus $\varepsilon(p_{r+1})=1$. The initial rank-two verification uses $d_1^2=\delta d_1$; the induction step applies for $r\ge2$. This proves the claim at every rank without using a complex-field theorem outside its hypotheses. [F1, F2, F4, construct, algebra]

2.1 If $e$ exists, step 1.1 and [F3] show that every column and row of its weight-$k$ matrix is a multiple of $v_k$. Comparing first the column at $0^{n-k}1^k$, and then all rows, makes that block $\alpha_k v_kv_k^{\mathsf T}$ for some scalar $\alpha_k$. Since $e-1$ is in the augmentation ideal, [F2] and the common-kernel property give $ev_k=v_k$. Hence $\alpha_kG_{n,k}(Q)=1$, by comparing the coefficient of $0^{n-k}1^k$. Thus $G_{n,k}(Q)\ne0$ and [F4] gives $B_{n,k}(\delta)\ne0$ for every $k$. [F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 The computation of steps 1.2–2.1 over $L$ now determines the entire matrix of $p_n$: its weight-$k$ block is $v_kv_k^{\mathsf T}/G_{n,k}(q^2)$. Let $S$ be the subring of $L$ generated by $\mathbb Z[q,q^{-1}]$ and all $G_{n,k}(q^2)^{-1}$, $0\le k\le n$. That displayed matrix $P_n$ has all entries in $S$. Apply the integral linear left inverse of [F3], after base change to $S$, to obtain $z\in\mathrm{TL}_n(S,q+q^{-1})$. Over $L$ it equals $p_n$, since $P_n=\rho_n(p_n)$. Since both $S$ and its free diagram module inject into their scalar extensions to $L$, it follows already over $S$ that $\rho_n(z)=P_n$, $\varepsilon(z)=1$, $z^2=z$, and $d_iz=zd_i=0$. This is the precise integrality step: no unproved centralizer or arbitrary-characteristic Schur–Weyl assertion is being used. [F1, F3, step 1.2, step 2.1, step 1.3, construct, algebra]

4.1 Return to a field containing a chosen $q_0$ with $\delta=q_0+q_0^{-1}$, and suppose all $B_{n,k}(\delta)$ are nonzero. Then [F4] makes every denominator defining $S$ nonzero at $q_0$, so evaluation of finite fractions defines a homomorphism $S\to K$, $q\mapsto q_0$. Applying it to $z$ from step 3.1 constructs the required normalized idempotent in $\mathrm{TL}_n(K,\delta)$. All identities specialize as polynomial identities after the named nonzero denominators are inverted; division by a vanishing quantum integer is never attempted. [F4, step 3.1, construct, algebra]

5.1 For a general field $K$, adjoin a root of $X^2-\delta X+1$ using [F5] if needed. This gives a field extension $K'$, with a nonzero root and the same polynomial values $B_{n,k}(\delta)$. Necessity follows in $K'$ by step 2.1. For sufficiency, step 4.1 gives a solution over $K'$ to the finite linear system $d_ie=0$, $\varepsilon(e)=1$ in diagram coefficients. Row reduction over $K$ shows that a linear system with coefficients and constants in $K$ is consistent over $K$ whenever it is consistent over a field extension: an inconsistent row $0=1$ would persist over that extension, while a row-echelon system without such a row has a solution by setting free variables to zero. Choose such a $K$-solution. Step 1.1 then proves its idempotence, both-sided annihilation and uniqueness. Ranks zero and one give the identity, with all the displayed quantum binomials equal to $1$. This completes both implications over every field. [F1, F5, step 1.1, step 2.1, step 4.1, construct, algebra] ∎
