---
id: thm-lubin-tate-explicit-local-reciprocity
kind: theorem
title: "Lubin–Tate explicit local reciprocity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-axiom-of-choice
  - def-lubin-tate-formal-group
  - thm-lubin-tate-formal-group-law-exists
  - thm-local-artin-reciprocity-and-norm-index
  - thm-local-artin-unramified-frobenius-normalization
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-dependent-choice
  - lem-canonical-local-reciprocity-from-cyclic-character-pairings
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-completion-of-an-absolutely-valued-field
  - lem-uniqueness-of-an-extended-complete-field-absolute-value
  - thm-krasner-lemma-for-complete-nonarchimedean-fields
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is required by the local class-formation supplier; DC enters through
  local reciprocity and finite extension conventions. AC implies Countable
  Choice, used by the finite-extension degree interface. The torsion valuation
  and finite module calculations are explicit.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter I §§2–3"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV §3"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a nonarchimedean local field with
residue cardinality $q$, uniformizer $\pi$, and Lubin–Tate formal group $F$
for $\pi$. For $n\ge1$, let
$\Lambda_n=\{\lambda\in\mathfrak m_{K_s}:[\pi^n]_F(\lambda)=0\}$ and
$K_n=K(\Lambda_n)$. Then $K_n/K$ is finite, totally ramified, and abelian,
and the action map
$$(\mathcal O_K/\pi^n)^\times\longrightarrow\operatorname{Gal}(K_n/K), \qquad \bar u\longmapsto(\lambda\mapsto[u]_F(\lambda))$$
is an isomorphism. Under local reciprocity normalized by arithmetic
Frobenius, a unit $u\in\mathcal O_K^\times$ acts on $\Lambda_n$ as
$[u^{-1}]_F$, while a uniformizer acts trivially on $K_n$ and as arithmetic
Frobenius on every unramified extension.

## Statement references

[[def-lubin-tate-formal-group]]

[[thm-lubin-tate-formal-group-law-exists]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[[def-countable-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[J. S. Milne, *Class Field Theory*, Chapter I §§2–3, printed pp. 32–45](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter IV §3, printed pp. 132–135](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** AC and DC; the original Lubin–Tate datum, with the standard tangent normalization $[a]_F'(0)=a$, and the distinguished local Artin map constructed by canonical character pairings. No global reciprocity theorem is assumed.

[F1] The uniformizer endomorphism satisfies $[\pi](X)=\pi X+O(X^2)$ and $[\pi](X)\equiv X^q\pmod\pi$. [[def-lubin-tate-formal-group]]

[F2] The normalized ring action has $[a]'(0)=a$, and $[u]$ is invertible for every unit $u$. Formal groups exist for every uniformizer. [[def-lubin-tate-formal-group]] [[thm-lubin-tate-formal-group-law-exists]]

[F3] The distinguished local reciprocity map is compatible across finite abelian quotients, has the actual field-norm kernel on each, and has arithmetic-Frobenius normalization on unramified extensions. [[thm-local-artin-reciprocity-and-norm-index]] [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F4] A finite local extension has degree equal to ramification index times residue degree. [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[A1] The arithmetic Frobenius convention is the residue map $x\mapsto x^q$. [[thm-local-artin-unramified-frobenius-normalization]]

[A2] Dependent Choice is inherited from the local finite-extension and reciprocity interfaces. [[def-dependent-choice]]

[A3] AC is required by the local class-formation supplier used in the local Artin theorem. [[def-axiom-of-choice]]

[A4] AC implies Countable Choice, which supplies the hypothesis of the finite-extension local degree theorem used in the torsion valuation calculation. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F5] Finite unramified local extensions correspond to finite residue extensions and have compatible arithmetic Frobenius automorphisms. The metric completion of a nonarchimedean absolutely valued field exists under Countable Choice and preserves its value group and residue field. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[thm-completion-of-an-absolutely-valued-field]]

[F6] Automorphisms of a finite extension of a complete valued field preserve its unique extended absolute value. Krasner's lemma implies that an algebraic intermediate field $E\subseteq K_s$ is relatively closed in $K_s$: if $\alpha\in K_s$ is approached by elements of $E$, take $\beta\in E$ closer to $\alpha$ than all its other $K$-conjugates to obtain $K(\alpha)\subseteq K(\beta)\subseteq E$. [[lem-uniqueness-of-an-extended-complete-field-absolute-value]] [[thm-krasner-lemma-for-complete-nonarchimedean-fields]]

## Proof

**Proof technique:** determine the torsion field, prove that each uniformizer is an actual norm from its own Lubin–Tate fields, and use Frobenius descent to compare the fields and action maps for different uniformizers. Canonical local reciprocity then agrees on every uniformizer, which generates the full multiplicative group.

**Given:** The data above.

1.1 Iteration gives $g(X)=[\pi^n](X)\equiv X^d\pmod\pi$ with $d=q^n$, and $g'(0)=\pi^n\ne0$. Construct $g=uP$ with $u$ an invertible formal power series over $\mathcal O_K$ and $P=X^d+a_{d-1}X^{d-1}+\cdots+a_0$, $a_i\in\pi\mathcal O_K$, by successive coefficient corrections. Start with $u_1=1$, $P_1=X^d$ so every coefficient of $g-u_1P_1$ lies in $\pi\mathcal O_K$. If every coefficient of $g-u_rP_r$ lies in $\pi^r\mathcal O_K$, divide its reduction modulo $\pi^{r+1}$ by $X^d$: uniquely write the error divided by $\pi^r$ as $b(X)X^d+c(X)$, $\deg c<d$. Replacing $u_r$ by $u_r(1+\pi^r b)$ and $P_r$ by $P_r+\pi^r c$ removes that error modulo $\pi^{r+1}$; the correction terms of order $\pi^{2r}$ vanish modulo $\pi^{r+1}$. Completeness gives the asserted factorization, with $u$ a unit and $P$ monic with lower coefficients in $\pi\mathcal O_K$. Every root of $P$ in an algebraic closure has positive valuation, since for $v(x)\le0$ the monic term $x^d$ has strictly smaller valuation than every lower term. Thus $g$ has exactly $q^n$ roots in the open valuation disk, counted with multiplicity. They are simple: translation by a torsion point has unit derivative, and differentiating $[\pi^n](F(X,\lambda))=F([\pi^n](X),0)$ at $X=0$ gives $g'(\lambda)F_X(0,\lambda)=g'(0)\ne0$. The roots form an $\mathcal O_K/\pi^n$-module under $F$ and its endomorphisms. [A2, F1, given, construct, algebra]

1.2 Put $K^{\mathrm{ur}}=\bigcup_d K_d^{\mathrm{ur}}$ in $K_s$, with arithmetic Frobenius $\sigma$, and let $B$ be the valuation ring of its metric completion. By [F5], $B$ is a complete DVR with uniformizer $\pi$, residue field $\bar k$, and an isometric automorphism $\sigma$ reducing to $x\mapsto x^q$. Both maps $b\mapsto\sigma b-b$ on $B$ and $b\mapsto\sigma b/b$ on $B^\times$ are onto. For the additive map solve $x^q-x=c$ in $\bar k$ at the first level; at each subsequent level a correction by $\pi^r x$ again has that residue equation. Compatible lifts converge by completeness. For the multiplicative map first solve $x^{q-1}=c$ in $\bar k^\times$ and correct thereafter by $1+\pi^r x$, whose quotient under $\sigma$ has correction $\pi^r(x^q-x)$. The declared DC permits compatible recursive choices. The additive fixed elements modulo $\pi^r$ are exactly $\mathcal O_K/\pi^r$: for $r=1$ this is $\mathbb F_q$, and induction lifts a fixed class from $\mathcal O_K/\pi^{r-1}$, after which its final coefficient is fixed in $\bar k$ and lies in $\mathbb F_q$. Thus $B^\sigma=\mathcal O_K$ by completeness. [A2, A3, A4, F5, construct, algebra]

2.1 Set $\Lambda_0=\{0\}$. Since $|\Lambda_n|=q^n$ and $|\Lambda_{n-1}|=q^{n-1}$ by step 1.1, choose a primitive $\lambda\in\Lambda_n\setminus\Lambda_{n-1}$. For $n=1$, in $[\pi](X)=\pi X+\sum_{i\ge2}a_iX^i$, the coefficients $a_i$ for $2\le i<q$ are divisible by $\pi$ and $a_q$ is a unit. If $v_K(X)<1/(q-1)$, then $qv_K(X)<1+v_K(X)$ and the $X^q$ term uniquely has least valuation; if $v_K(X)>1/(q-1)$, then $\pi X$ uniquely has least valuation. A nonzero root therefore has valuation $1/(q-1)$. For a primitive level-$n$ point, each $[\pi^j](\lambda)$ has exact level $n-j$. Before the last step its valuation must be below $1/(q-1)$: above that threshold the $\pi X$ term gives $v([\pi](x))=1+v(x)>1/(q-1)$, while at equality the image is zero or has valuation at least $q/(q-1)>1/(q-1)$. In the latter case subsequent nonzero images keep increasing in valuation, so neither case can reach the nonzero level-one point. Thus $v_K([\pi](x))=qv_K(x)$ at each earlier step, and iteration backwards gives $v_K(\lambda)=1/(q^{n-1}(q-1))$. By [F4], every finite field containing $\lambda$ has ramification index divisible by $q^{n-1}(q-1)$. [A4, F1, F4, step 1.1, algebra]

3.1 The primitive torsion points number $q^n-q^{n-1}=q^{n-1}(q-1)$. If $[a]_F(\lambda)=0$ for $a\notin\pi^n\mathcal O_K$, write $a=\pi^r u$ with $r<n$ and $u$ a unit; invertibility of $[u]_F$ would imply $[\pi^r]_F(\lambda)=0$, contradicting primitivity. Thus the annihilator of $\lambda$ is exactly $\pi^n\mathcal O_K$, and the map $a\bmod\pi^n\mapsto[a]_F(\lambda)$ bijects $\mathcal O_K/\pi^n$ with $\Lambda_n$. Its units give all primitive points, with distinct residues giving distinct points. Every $K$-conjugate of $\lambda$ is primitive, so its minimal polynomial has at most $q^n-q^{n-1}$ roots; step 2.1 gives degree at least that number. Equality follows, all primitive points are conjugates, and $K_n=K(\lambda)$ is Galois and totally ramified. The action map in the Statement is therefore an isomorphism. [A4, F2, F4, step 1.1, step 2.1, algebra]

4.1 For two endomorphisms $f,g\in\mathcal O_K\lbrack\!\lbrack X\rbrack\!\rbrack$ with the same linear term $\pi X$ and reduction $X^q$, there is a unique integral coordinate $h(X)=X+O(X^2)$ satisfying $h\circ f=g\circ h$. Recursively, its degree-$r$ coefficient is determined by division by $\pi^r-\pi$; the error is divisible by $\pi$ because reduction commutes with $q$th powers, and $(\pi^r-\pi)/\pi$ is a unit for $r\ge2$. Transporting a formal group law and its normalized scalar actions through $h$ yields those for $g$: both transported and given series commute with $g$ and have the same linear term, so the same coefficient recursion gives equality. Thus the torsion fields for a fixed parameter $\pi$ do not change on replacing its endomorphism by $f(X)=\pi X+X^q$. For this polynomial, a primitive level-$n$ point $\lambda$ satisfies the monic polynomial $Q_n(X)=\pi+(f^{\circ(n-1)}(X))^{q-1}$, of degree $D=(q-1)q^{n-1}$ and constant term $\pi$. Step 3.1 gives $[K(\lambda):K]=D$, so $Q_n$ is its minimal polynomial. Therefore $N_{K_n/K}(-\lambda)=\pi$, including $D=1$. This proves that $\pi$ is a norm from every level of every normalized Lubin–Tate group for $\pi$. [F1, F2, F4, step 3.1, construct, algebra]

5.1 Let $\varpi=u\pi$ be another uniformizer. Write $f=[\pi]_F$, and choose a normalized Lubin–Tate group $F'$ for $\varpi$, with $g=[\varpi]_{F'}$, using [F2]. By step 1.2 choose $\varepsilon\in B^\times$ with $\sigma\varepsilon=u\varepsilon$. Construct $h(X)=\varepsilon X+O(X^2)$ over $B$ with $\sigma h=h\circ[u]_F$. If coefficients below degree $r$ are fixed, writing its new coefficient as $a\varepsilon^r$ makes the required equation $(\sigma a-a)(u\varepsilon)^r=c$ for a known $c\in B$, soluble by step 1.2. The resulting $h$ has integral inverse. Set $k=(\sigma h)\circ f\circ h^{-1}$. Since $f$ commutes with $[u]_F$, the relation for $h$ gives $\sigma k=k$, so $k\in\mathcal O_K\lbrack\!\lbrack X\rbrack\!\rbrack$ by step 1.2. Its linear term is $\varpi X$, and its reduction is $X^q$, because coefficientwise Frobenius satisfies $\overline{\sigma h}\circ X^q=X^q\circ\bar h$. Step 4.1 for parameter $\varpi$ supplies $c(X)=X+O(X^2)$ over $\mathcal O_K$ with $c\circ k=g\circ c$. Replacing $h$ by $c\circ h$ retains $\sigma h=h\circ[u]_F$ and gives $g\circ h=h\circ[\varpi]_F$. Transported formal groups and scalar actions therefore commute with $g$ and have the correct tangent terms, so coefficientwise uniqueness as in step 4.1 proves that $h:F\to F'$ is an $\mathcal O_K$-linear formal-group isomorphism over $B$. [F1, F2, step 4.1, step 1.2, construct, algebra]

6.1 This $h$ carries primitive level-$n$ torsion of $F$ bijectively to primitive level-$n$ torsion of $F'$, since $\pi^n$ and $\varpi^n$ generate the same ideal. For a torsion point $\lambda$, the convergent value $h(\lambda)$ is algebraic and separable over $K$: it is one of the simple torsion roots of $F'$. Its partial sums, with coefficients approximated from $K^{\mathrm{ur}}$, lie arbitrarily close in the completion to elements of $K^{\mathrm{ur}}K_{\pi,n}$. Relative closedness [F6] then gives $h(\lambda)\in K^{\mathrm{ur}}K_{\pi,n}$. Applying the inverse coordinate gives the reverse inclusion. Consequently $S_n=K^{\mathrm{ur}}K_{\pi,n}=K^{\mathrm{ur}}K_{\varpi,n}$ is independent of the uniformizer. These fields are abelian over $K$ by step 3.1 and [F5]. [A4, F5, F6, step 3.1, step 5.1, construct]

7.1 Define $R_\pi:K^\times\to\operatorname{Gal}(S_n/K)$ by sending $a=v\pi^r$, $v\in\mathcal O_K^\times$, to arithmetic Frobenius $\sigma^r$ on $K^{\mathrm{ur}}$ and to $[v^{-1}]_F$ on $K_{\pi,n}$. This is a homomorphism: the totally ramified field in step 3.1 and each unramified extension have trivial intersection, so these commuting actions uniquely define the action on their compositum. For $\varpi=u\pi$, $R_\pi(\varpi)$ acts as $\sigma$ on $B$ and as $[u^{-1}]_F$ on $\lambda$. Hence $R_\pi(\varpi)(h(\lambda))=(\sigma h)([u^{-1}]_F\lambda)=h(\lambda)$ by step 5.1. It therefore fixes $K_{\varpi,n}$ and acts as arithmetic Frobenius on $K^{\mathrm{ur}}$, so equals $R_\varpi(\varpi)$ on the common $S_n$. Here the coefficient action on $B$ is justified by the isometry and continuity in [F6]. [F2, F5, F6, step 3.1, step 5.1, step 6.1, construct, algebra]

8.1 Let $\rho_K$ be the distinguished local Artin map in [F3]. For every uniformizer $\varpi$, step 4.1 applied to $F'$ proves that $\varpi$ is an actual norm from $K_{\varpi,n}$, so the norm-kernel clause of [F3] makes $\rho_K(\varpi)$ trivial on that field. Its unramified action is arithmetic Frobenius by [A1]. Thus its restriction to $S_n$ is $R_\varpi(\varpi)=R_\pi(\varpi)$ by step 7.1. Every unit $u$ is the quotient of the uniformizers $u\pi$ and $\pi$, so the homomorphisms agree on all of $K^\times$. Restricting to $K_{\pi,n}$ gives the asserted unit action $[u^{-1}]_F$ and the trivial action of $\pi$; restricting to the unramified fields gives the asserted Frobenius. Together with step 3.1 this proves the complete original Statement, without inferring a canonical unit action merely from equal kernels or unramified orientation. [A1, A2, A3, A4, F3, step 3.1, step 4.1, step 7.1, algebra] ∎
