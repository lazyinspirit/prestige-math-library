---
dependency_level: 5
id: lem-normal-prime-degree-milnor-transfer-and-residue-exchange
kind: lemma
title: Normal-prime Milnor transfers and the residue exchange square
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-presented-simple-extension-milnor-transfer
- lem-milnor-residue-specialization-and-principal-unit-kernel
- lem-prime-degree-milnor-symbol-normal-form-after-coprime-extension
- lem-complete-discrete-valuation-extension-degree-and-tame-norm
- thm-bass-tate-residue-sequence-for-rational-function-fields
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-completion-of-an-absolutely-valued-field
- lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
- thm-fundamental-theorem-of-finite-galois-theory
justified_by: []
proof_strategy: direct
axiom_use: AC canonical normal-prime transfer; full complete-DVR residue comparison;
  rational constant-extension residue reciprocity and simple/normal-prime exchange,
  including purely inseparable prime extensions.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, Chapter IX §§2–3;
      explicit finite reduction and local reconstruction below
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
verification: {}
---

## Statement

Assume AC. For a finite normal extension $L/F$ of prime degree $p$ (separable or purely inseparable), its presented simple Milnor transfer is independent of the generator. Denote it by $N_{L/F}$, and let the identity extension have identity norm. It is natural under field isomorphisms, has the projection and degree formulas, and satisfies the sum-of-embeddings formula with inseparable multiplicity. For a complete discretely valued field $K$ with arbitrary residue field and a normal prime-degree extension $E/K$, it satisfies
$$\partial_K N_{E/K}=N_{k_E/k_K}\partial_E.$$
Here the residue extension has degree one or $p$ and is normal, so the right side is already defined. For every finite or infinite rational-function valuation $v$ of $F(X)$ trivial on $F$ one has
$$\partial_v N_{L(X)/F(X)}=\sum_{w\mid v}N_{L(X)(w)/F(X)(v)}\partial_w.$$
Consequently, if $A=F(\beta)$ is any finite simple extension, $B=LA$, then
$$T_{\beta/F}\,N_{B/A}=N_{L/F}\,T_{\beta/L}:K_n^M(B)\longrightarrow K_n^M(F)\quad(n\ge0).$$
In this formula each $T$ is the presented simple map for the displayed element, and $B/A$ is normal of degree one or $p$.

## Statement references

[[def-axiom-of-choice]]

[[lem-presented-simple-extension-milnor-transfer]]

[[lem-milnor-residue-specialization-and-principal-unit-kernel]]

[[lem-prime-degree-milnor-symbol-normal-form-after-coprime-extension]]

[[lem-complete-discrete-valuation-extension-degree-and-tame-norm]]

[[thm-bass-tate-residue-sequence-for-rational-function-fields]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[[thm-completion-of-an-absolutely-valued-field]]

## Facts & Assumptions

**Given:** The objects and assumptions in the Statement.

[F1] Presented simple Milnor transfers have the projection and degree identities, determinant norm in degree one, and coefficient-extension formula including factor multiplicities. [[lem-presented-simple-extension-milnor-transfer]]

[F2] A finite family over a prime-degree simple extension has one nonbase entry per symbol after a finite extension of coprime degree. [[lem-prime-degree-milnor-symbol-normal-form-after-coprime-extension]]

[F3] Finite complete-DVR extensions have finite free integral closure, degree $ef$, and the valuation, unit and tame determinant norm identities, without any residue separability assumption. [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]]

[F4] Actual Milnor residues vanish on unit symbols and take units followed by a uniformizer to their residue symbol; the unit/one-uniformizer normal form is valid. [[lem-milnor-residue-specialization-and-principal-unit-kernel]]

[F5] The finite-point residue sequence for a rational function field is exact and surjective with finite support. [[thm-bass-tate-residue-sequence-for-rational-function-fields]]

[F6] Simple residue roots lift uniquely over a complete valued field. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F8] Symbols anticommute and repeated entries reduce to an entry $-1$; the finite Galois correspondence supplies degrees of fixed fields. [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F7] Under Countable Choice the valued-field completion exists and keeps value group and residue field. [[thm-completion-of-an-absolutely-valued-field]]

[A1] AC is explicit; in particular the countable choices allowed by [F7] and [F3] are available. [[def-axiom-of-choice]]

## Proof

**Given:** The data above.

1.1 For any generator $\alpha$ of a normal prime extension, extend coefficients to $L$ in [F1]. If $L/F$ is separable its minimal polynomial splits into $p$ distinct linear factors; if inseparable it is $(X-\alpha)^p$. The transfer for a linear polynomial is the identity after evaluation: the projection formula and $T(1)=1$ give this in every degree. Thus $jT_\alpha$ is the sum of the $p$ automorphisms in the separable case and $p$ times the identity in the inseparable case. For two generators $\alpha,\gamma$, the difference $\delta=T_\alpha x-T_\gamma x$ restricts to zero in $K_n^M(L)$, and applying either presented transfer gives $p\delta=0$. For $n=0$ both maps already multiply by $p$. [F1, given, algebra]

1.2 We justify passing to completions for a constant rational extension, including inseparability. For finite $v=v_P$, put $A=F[X]_{(P)}$ and $R=L[X]\otimes_{F[X]}A$. This is finite free of rank $p$ over $A$, a localization of the PID $L[X]$, and its integral closure: it is integral over $A$ and integrally closed in $L(X)$, so every element integral over $A$ lies in it. Its finitely many maximal ideals are the irreducible factors $Q$ of $P$ over $L$, and $PR=\prod_Q Q^{e_Q}R$. Completing and applying the Chinese remainder theorem at every power gives $$R\otimes_A\widehat A=\prod_Q\widehat{R_Q}.$$ The equality with the tensor product follows by writing the inverse limit coefficientwise in a finite free $A$-basis; powers $e_Qr$ and all powers are cofinal at each $Q$. Each factor is the completion of a DVR, hence again a DVR with the same uniformizer and residue field by [F7]. Taking fraction fields gives $$L(X)\otimes_{F(X)}K=\prod_Q E_Q,\qquad K=\operatorname{Frac}\widehat A,\quad E_Q=\operatorname{Frac}\widehat{R_Q}.$$ In particular this algebra is reduced, even for purely inseparable $L/F$; no tensor reducedness was assumed. Each $E_Q/K$ is normal of degree one or $p$: in the separable case the original normal-prime polynomial either stays irreducible or has one root and hence all $p$ roots in $K$; in the inseparable case reducedness excludes a repeated linear factor, so it stays irreducible. The same argument at infinity uses $F[X^{-1}]_{(X^{-1})}$. The finite free quotient filtration also gives $\sum_Q e_Q[k(Q):k(P)]=p$, consistently with [F3]. [F3, F7, F8, A1, given, construct, algebra]

2.1 For $n\ge1$, choose $D/F$ of degree prime to $p$ for the fixed $x$ by [F2]. A normal prime extension is either cyclic Galois of degree $p$ or purely inseparable of degree $p$. In the former case base extension has degree $1$ or $p$ by the normal Galois correspondence; in the latter its minimal polynomial has its unique root or remains irreducible of degree $p$. Degree one in either case would embed $L$ in $D$, contradicting the degree being prime to $p$. Hence $LD/D$ has degree $p$. The two minimal polynomials remain irreducible over $D$, so [F1] restricts $T_\alpha,T_\gamma$ to their respective presented maps over $D$. On the symbols from [F2] these agree by projection and their identical determinant $K_1$ norm. Thus $j_{F/D}\delta=0$. A finite simple-generator tower for $D/F$, using [F1] at each step, has composite $T$ with $Tj=[D:F]$ on classes from $F$; therefore $[D:F]\delta=0$. Together with $p\delta=0$, Bezout gives $\delta=0$. This proves generator independence for normal prime extensions only. The inherited projection, degree and embedding-sum identities are now canonical for them. Applying a field isomorphism to the rational variable, symbol formulas and minimal polynomial commutes with every residue, including infinity; the unique component construction of [F1] therefore proves their naturality. [F1, F2, F8, step 1.1, construct, algebra]

3.1 Let $E/K$ be a normal prime extension of complete DVR fields, and put $e=e(E/K)$, $f=[k_E:k_K]$, so $ef=p$ by [F3]. Its residue extension is normal: a residue element has an integral lift $b$, whose multiplication characteristic polynomial on the finite free integral lattice is monic over $\mathcal O_K$. In a $K(b)$-basis of $E$ it is a power of the minimal polynomial of $b$, so it splits over $E$ by normality. All its roots are integral, since a root of a monic integral polynomial cannot have negative valuation. Its reduction therefore splits over $k_E$ and annihilates $\bar b$; the minimal polynomial of $\bar b$ divides that reduction and splits as well. If $f=p$ and that residue extension is separable, lift a primitive residue element's monic minimal polynomial to $\mathcal O_K[T]$. By [F6] it has a root in $\mathcal O_E$ with that residue. The residue degree forces this root to generate $E/K$, and its conjugates have all the distinct residue roots. Thus the residue automorphisms are exactly its $p$ automorphisms. If $f=p$ is inseparable, its degree is purely inseparable and all residue automorphisms are the identity; if $f=1$ this is also immediate. With the embedding-sum formula of step 1.1, these observations give $$e\,j_{k_K/k_E}\bigl(\partial_KN_{E/K}x-N_{k_E/k_K}\partial_E x\bigr)=0.$$ Indeed restriction and residue obey $\partial_Ej=e j\partial_K$, verified on unit symbols and units followed by a uniformizer using [F4]; the sums of residue automorphisms have the multiplicities just computed. Applying the residue transfer when $f=p$, or using $f=1$, shows that the parenthesized difference $y$ is killed by $p$. All residue norms here are normal-prime norms from step 2.1 or identity maps. [F1, F3, F4, F6, step 1.1, step 2.1, algebra]

4.1 Apply [F2] to $x$ over $E/K$, obtaining a finite $D/K$ of degree prime to $p$ such that $x$ over $E'=ED$ is a sum of symbols with all but one entry in $D$. Complete fields and the unique valuation give a common complete DVR on $E'$, by [F3]. Put $e_D=e(D/K)$ and $f_D=[k_D:k_K]$, both prime to $p$. Degree $[E':D]=p$ follows as in step 2.1. If $f=p$, the normal prime residue extension and the coprime residue degree $f_D$ give $[k_Ek_D:k_D]=p$; hence $e(E'/D)=1$ and $k_{E'}=k_Ek_D$. If $e=p$, the equality of valuation indices in the two field towers and $p\nmid e_D$ force $e(E'/D)=p$, hence $k_{E'}=k_D$. In both cases $e(E'/E)=e_D$. The presented coefficient-extension identity gives $jN_{E/K}=N_{E'/D}j$; it also gives the residue norm base-change identity (one irreducible factor, multiplicity one, or the identity extension). Combining these with $\partial j=e j\partial$ yields $$e_Dj_{k_K/k_D}y=\partial_DN_{E'/D}(jx)-N_{k_{E'}/k_D}\partial_{E'}(jx).$$ For the normal-form symbols on the right this difference is zero: reduce the base-field entries to units and at most one uniformizer using [F4]. With all base entries units use $v_D(Nb)=f(E'/D)v_{E'}(b)$ and projection on the residue norm. With one nonunit base entry use the tame identity of [F3] on that entry and the final entry, multiplying by the remaining residue-unit symbols and their common reordering sign. For $n=1$ it is just the norm valuation identity. Thus $e_D j y=0$. As $py=0$ and $p\nmid e_D$, one has $jy=0$; applying a chosen finite-tower degree map for $k_D/k_K$ gives $f_Dy=0$. Since $p\nmid f_D$, $y=0$. This proves the full complete-DVR residue comparison, not just its reduction on base-entry symbols. [F1, F2, F3, F4, F8, step 2.1, step 3.1, construct, algebra]

5.1 Extend coefficients from $F(X)$ to $K$ in the presented transfer formula [F1]. Step 1.2 says its irreducible factors correspond exactly to the fields $E_Q$ and have multiplicity one, so restriction of the normal-prime transfer is the sum of their transfers after restriction to $E_Q$. Apply $\partial_K$ and then step 4.1 to each factor. Residues and value groups of the completions are unchanged by [F7], so this is precisely $$\partial_vN_{L(X)/F(X)}=\sum_{w\mid v}N_{L(X)(w)/F(X)(v)}\partial_w.$$ No canonical norm of a nonprime field extension enters this identity. [F1, F4, F7, step 4.1, step 1.2, algebra]

6.1 Let $A=F(\beta)$ and let $w$ over its finite valuation $v$ on $F(X)$ be the valuation of $L(X)$ obtained from the minimal polynomial of the chosen $\beta$ over $L$. Its residue field is $B=LA$, and $B/A$ is normal of degree one or $p$. For $x\in K_n^M(B)$, use [F5] to choose $z\in K_{n+1}^M(L(X))$ with residue $x$ at $w$ and zero at every other finite valuation. By step 5.1, $N_{L(X)/F(X)}z$ has only the $v$ finite residue, equal to $N_{B/A}x$. The defining infinity-component formulas give $$T_{\beta/F}N_{B/A}x=-\partial_\infty N_{L(X)/F(X)}z=-N_{L/F}\partial_\infty z=N_{L/F}T_{\beta/L}x.$$ The middle equality is step 5.1 at infinity, where the residue extension is $L/F$. This includes $n=0$ by using the residue sequence in degree one. It proves the required genuine exchange square from residue reciprocity, rather than assuming tower independence. [F1, F5, step 2.1, step 5.1, construct, algebra] ∎

