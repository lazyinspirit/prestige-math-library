---
id: thm-hochschild-hyperhomology-is-resolution-independent
kind: theorem
title: "Hochschild hyperhomology is independent of a projective resolution"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-hochschild-hyperhomology-of-a-bimodule-complex
  - thm-two-sided-bar-complex-is-an-enveloping-projective-resolution
  - lem-hochschild-chains-are-bar-tensor-chains
  - lem-projective-modules-are-flat-over-an-arbitrary-ring
  - lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object
  - thm-projective-comparison-maps-are-unique-up-to-chain-homotopy
  - thm-chain-homotopic-maps-induce-the-same-map-on-homology
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
  - def-opposite-ring
  - def-two-sided-bar-resolution-of-an-associative-algebra
  - def-enveloping-algebra-and-bimodule-module-dictionary
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.6, printed p.38"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "§3.8.6, printed p.38: $\\mathrm{CH}_\\bullet(A,C_\\bullet):=\\mathrm{coInv}(C_\\bullet\\otimes_A R_\\bullet(A))$ and the Hochschild complex of a complex of bimodules."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.3–9.1.5: the bar resolution and $\\operatorname{Bar}(A)\\otimes_{A^e}M\\cong C_\\bullet(A,M)$. Resolution comparison and homotopy uniqueness are supplied by the cited library theorems [F6] and [F11], respectively."
verification:
  precheck: n/a
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field, let $A$ be a unital
associative $k$-algebra, and let $F=(F^i,d_F^i)$ be a bounded cochain complex
of $k$-central $A$-bimodules with differentials of internal degree zero, in the
sense of [[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]].
Regard the two-sided bar complex $\operatorname{Bar}(A)$ as a complex of right
$A^e$-modules and reindex it by $\widetilde{\operatorname{Bar}}{}^i:=\operatorname{Bar}_{-i}(A)$,
$\widetilde{\operatorname{Bar}}{}^i=0$ for $i>0$. Then the tensor total complex
$$\operatorname{Tot}\bigl(\widetilde{\operatorname{Bar}}{}\otimes_{A^e}F\bigr)^n=\bigoplus_{i-p=n}\operatorname{Bar}_{p}(A)\otimes_{A^e}F^{i}$$
is identified with the Hochschild hyperhomology complex
$T^\bullet(A,F)$ of [[def-hochschild-hyperhomology-of-a-bimodule-complex]] by
the bar-to-Hochschild map on each summand, multiplied by $(-1)^{ip}$. Indeed,
the source tensor differential is $b+(-1)^p d_F$, while the target differential
is $d_F+(-1)^i b$; the factor $(-1)^{ip}$ intertwines both components. The
direct-sum index is $i-p=n$, since the reindexed bar degree is $-p$.

Consequently the hyperhomology $\mathrm{HH}^{\mathrm{hyper},n}(A,F)$ can be
computed from any supplied bounded-above projective resolution
$P\to A$ of $A$ in right $A^e$-modules by
$H^n\operatorname{Tot}\bigl(P\otimes_{A^e}F\bigr)$, and any two such resolutions
give canonically isomorphic hyperhomology, the isomorphism being natural in $F$
up to chain homotopy. Moreover every quasi-isomorphism $F\to G$ of bounded
cochain complexes of $k$-central $A$-bimodules with internal-degree-zero
differentials induces an isomorphism
$\mathrm{HH}^{\mathrm{hyper},n}(A,F)\to \mathrm{HH}^{\mathrm{hyper},n}(A,G)$ for
every $n$; when the quasi-isomorphism has internal degree zero this isomorphism
is compatible with the internal gradings, so it maps the internal-degree-$r$
part of $\mathrm{HH}^{\mathrm{hyper},n}(A,F)$ isomorphically onto the
internal-degree-$r$ part of $\mathrm{HH}^{\mathrm{hyper},n}(A,G)$. The Axiom of
Choice enters only through the basis of $A$ used to make each bar term
projective and through the comparison choices between projective resolutions;
the sign and exactness computations are choice-free.

## Facts & Assumptions

**Given:** AC, a field $k$, a unital associative $k$-algebra $A$, and a bounded cochain complex $F$ of $k$-central $A$-bimodules with internal-degree-zero differentials.

[F1] The Hochschild hyperhomology complex has $T^n(A,F)=\bigoplus_{i-j=n,\,j\geq0}C_j(A,F^i)$ with differential $D=d_F+(-1)^ib$ on the $(i,j)$ summand, where $b$ is the Hochschild boundary; every total degree is a finite direct sum because $F$ is bounded, and $\mathrm{HH}^{\mathrm{hyper},n}(A,F)=H^n(T^\bullet(A,F))$ ([[def-hochschild-hyperhomology-of-a-bimodule-complex]]).

[F2] $\operatorname{Bar}_n(A)=A\otimes_kA^{\otimes_kn}\otimes_kA$ carries the right $A^e$-action $(a_0\otimes\cdots\otimes a_{n+1})\cdot(c\otimes d^{\mathrm{op}})=da_0\otimes a_1\otimes\cdots\otimes a_{n+1}c$, and $d_n=\sum_{r=0}^n(-1)^r\mu_{r,r+1}$ with augmentation $\varepsilon=\mu$; under AC the augmented bar complex is a projective resolution of $A$ both as a right and as a left $A^e$-module ([[def-two-sided-bar-resolution-of-an-associative-algebra]], [[thm-two-sided-bar-complex-is-an-enveloping-projective-resolution]]).

[F3] $\Phi_n:\operatorname{Bar}_n(A)\otimes_{A^e}M\to C_n(A,M)$, $(a_0\otimes\cdots\otimes a_{n+1})\otimes m\mapsto(a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n$, is a natural isomorphism of chain complexes from the coinvariant complex of the bar resolution to the Hochschild complex of a $k$-central bimodule $M$, with no projectivity hypothesis on $M$ ([[lem-hochschild-chains-are-bar-tensor-chains]]).

[F4] Every projective left or right module over a unital ring is flat on that side, and this implication uses no Axiom of Choice ([[lem-projective-modules-are-flat-over-an-arbitrary-ring]]).

[F5] A bounded-above complex of flat right $R$-modules preserves quasi-isomorphisms between bounded-above left $R$-complexes under tensor totalization; the assertion also holds with the sides exchanged ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]).

[F6] Assume DC. Any two projective resolutions of the same object are homotopy equivalent over that object; in particular there are augmentation-preserving chain maps in both directions whose composites are chain-homotopic to the identities ([[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]]).

[F7] AC implies DC and hence the countable choice used by the comparison argument ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]]).

[F8] A right $E$-module is the same as a left $E^{\mathrm{op}}$-module via $r^{\mathrm{op}}m:=mr$; a projective resolution of $A$ in right $A^e$-modules is thus a projective resolution in left $(A^e)^{\mathrm{op}}$-modules ([[def-opposite-ring]]).

[F9] The $k$-central bimodule $F^i$ is a left $A^e$-module by $(c\otimes d^{\mathrm{op}})m=cmd$ and a right $A^e$-module by $m(c\otimes d^{\mathrm{op}})=dmc$, the two dictionaries being inverse; for a coefficient complex of bimodules the tensor products $P\otimes_{A^e}F$ are formed with respect to the left $A^e$-structure on $F$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).


[F10] Chain-homotopic maps induce the same map on homology; reindexing a cochain complex as $C_n=C^{-n}$ gives the corresponding statement for cohomology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[F11] Under DC, any two augmentation-preserving maps between projective resolutions lifting the same object morphism are chain-homotopic ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).
## Proof

**Proof technique:** direct.

1.1 Reindex the bar resolution as a cochain complex by $B^i:=\operatorname{Bar}_{-i}(A)$, so $B^i=0$ for $i>0$ and $B^i$ is a projective, hence flat, right $A^e$-module for every $i$ by [F2] and [F4]. The differential $B^i\to B^{i+1}$ is $d_{-i}$, and $H^0(B^\bullet)\cong A$ with $H^i(B^\bullet)=0$ for $i\neq0$: the augmented bar complex is exact in positive degrees with augmentation $\varepsilon$ by [F2]. Hence $B^\bullet\to A$ is a bounded-above projective resolution of $A$ in right $A^e$-modules. [F2, F4, given, algebra]

1.2 For each pair $(p,i)$, [F3] gives a natural chain isomorphism $\Phi:\operatorname{Bar}_p(A)\otimes_{A^e}F^i\to C_p(A,F^i)$. In the reindexed bar complex the summand has total cochain degree $i-p$, and the standard tensor differential is $b+(-1)^p d_F$. Define $\Theta$ on that summand by $\Theta_{i,p}=(-1)^{ip}\Phi$. For the coefficient differential, $(-1)^p\Theta_{i+1,p}=(-1)^{p+(i+1)p}\Phi=(-1)^{ip}\Phi=d_F\Theta_{i,p}$. For the bar differential, $\Theta_{i,p-1}=(-1)^{i(p-1)}\Phi=(-1)^i(-1)^{ip}\Phi=(-1)^i b\Theta_{i,p}$. These are precisely the two components of $D=d_F+(-1)^ib$ in [F1]. Thus $\Theta$ is an isomorphism of cochain complexes from the tensor total, whose degree-$n$ part is $\bigoplus_{i-p=n}\operatorname{Bar}_p(A)\otimes_{A^e}F^i$, to $T^\bullet(A,F)$. [F1, F3, given, algebra]

1.3 The internal grading is preserved: each $d_F^i$ has internal degree zero by hypothesis, each Hochschild boundary is the alternating sum of faces built from the bimodule actions and is therefore homogeneous of internal degree zero, and the bar differential is a sum of adjacent multiplications, also of internal degree zero; the tensor total of 1.2 therefore has internal-degree-zero differential. Consequently the identification of 1.2 restricts to an isomorphism of the internal-degree-$r$ parts in every total degree. [F1, F3, given, algebra]

2.1 Let $P\to A$ be any supplied bounded-above projective resolution of $A$ in right $A^e$-modules. By [F8], regard these right modules as left $(A^e)^{\mathrm{op}}$-modules, so the projective-resolution comparison theorem [F6] applies; DC is supplied by [F7]. Thus there are augmentation-preserving chain maps $u:P\to B$ and $v:B\to P$ whose composites are chain-homotopic to the identities. Tensoring over $A^e$ with $F$ gives chain maps of tensor totals, and a cochain homotopy $h$ on the resolution factor induces $H(x\otimes f)=h(x)\otimes f$. For $x\in P^r$, the two coefficient-differential terms in $DH+HD$ have signs $(-1)^{r-1}$ and $(-1)^r$, so they cancel; the remaining terms are $(d h+h d)(x)\otimes f$. Thus the homotopies tensor to homotopies, and the two total complexes are chain-homotopy equivalent. [F6, F7, F8, F9, step 1.1, given, algebra]

3.1 The comparison maps of 2.1 are natural in the coefficient complex and well defined up to chain homotopy: any two augmentation-preserving maps lifting $1_A$ are chain-homotopic by [F11], using DC from [F7], and the formula in 2.1 preserves that homotopy after tensoring with $F$. By [F10], homotopic maps of the resulting cochain totals induce the same map on cohomology. Together with 1.2, this identifies the model computed from any $P$ with $T^\bullet(A,F)$ naturally in $F$ up to chain homotopy. [F7, F10, F11, step 1.2, step 2.1, given, algebra]

3.2 Let $f:F\to G$ be a quasi-isomorphism of bounded cochain complexes of $k$-central $A$-bimodules with internal-degree-zero differentials. Regard it as a quasi-isomorphism of bounded-above left $A^e$-complexes by [F9]. The bounded-above complex $B$ is termwise flat by 1.1, so [F5] makes $\operatorname{Tot}(B\otimes_{A^e}f)$ a quasi-isomorphism. The comparison maps of 2.1 commute with coefficient maps, so the same is true for any supplied resolution $P$. Transporting through 1.2 gives the claimed isomorphism on hyperhomology, and 1.3 makes it internal-degree preserving when $f$ has internal degree zero. [F5, F9, step 1.1, step 1.2, step 1.3, step 2.1, given, algebra]

4.1 Combining 1.2, 3.1 and 3.2: the definition's hyperhomology complex is the tensor total of the reindexed bar resolution with $F$; any supplied bounded-above projective resolution of $A$ computes the same hyperhomology, the comparison being canonical and natural in $F$ up to chain homotopy; and every quasi-isomorphism $F\to G$ of bounded bimodule complexes with internal-degree-zero differentials induces an isomorphism of hyperhomology, compatible with internal gradings. The Axiom of Choice is used only for the bar-term bases of [F2] and through AC⇒DC in [F7]; the flatness, tensor-total, sign and grading computations are choice-free. This establishes the statement. [F2, F7, step 1.2, step 3.1, step 3.2, given, algebra] ∎
