---
id: ex-stiefel-whitney-number-of-real-projective-space
kind: example
title: "Stiefel-Whitney numbers of real projective space"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-stiefel-whitney-number-of-a-closed-manifold, def-stiefel-whitney-classes-from-the-projective-bundle-relation, thm-naturality-of-stiefel-whitney-classes, thm-whitney-sum-formula-for-stiefel-whitney-classes, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, lem-real-projective-space-cellular-homology-and-pinch-map, prop-first-stiefel-whitney-class-classifies-orientability, prop-boundaries-have-zero-stiefel-whitney-numbers, def-null-cobordant-closed-manifold, def-fundamental-class-of-a-compact-oriented-manifold, def-kronecker-evaluation-pairing, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, def-axiom-of-choice, def-complex-projective-bundle-and-tautological-complex-line, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Section 4, Theorem 4.5, printed p. 45: the projective tangent splitting and total class; printed pp. 50-53: the projective-space numbers, boundary obstruction and odd-dimensional cases."
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 1, printed pp. 13-14, for the real projective generators and their Stiefel-Whitney numbers"
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 11, printed pp. 20-22: computations of the Stiefel-Whitney classes of projective spaces and the hypersurfaces"
dependency_level: 0
---

## Example

Assume AC ([[def-axiom-of-choice]]), inherited from the Stiefel-Whitney class
construction and the field-duality supplier. Let $n\ge0$. For $n\ge1$ let
$x\in H^1(\mathbb{RP}^n;\mathbb F_2)$ be the nonzero generator, and for $n=0$ set $x=0$. Then
$H^*(\mathbb{RP}^n;\mathbb F_2)=\mathbb F_2[x]/(x^{n+1})$ and
$\langle x^n,[\mathbb{RP}^n]\rangle=1$. Then the total Stiefel-Whitney class of
the tangent bundle is
$$w(T\mathbb{RP}^n)=(1+x)^{n+1},$$
so for a partition $I=(i_1,\dots,i_r)$ of $n$ the Stiefel-Whitney number is the
product of binomial coefficients
$$w^{I}[\mathbb{RP}^n]=\binom{n+1}{i_1}\cdots\binom{n+1}{i_r}\bmod 2,$$
and the top number is $w_n[\mathbb{RP}^n]=n+1\bmod2$: it is $1$ for $n$ even
and $0$ for $n$ odd. In particular $\mathbb{RP}^{2k}$ is not null-cobordant,
extending the known surface case to all even dimensions; and for $n=2^s-1$ with $s\ge1$ the
total class is $(1+x)^{2^s}=1+x^{2^s}=1+x^{n+1}=1$ in
$\mathbb F_2[x]/(x^{n+1})$, so all Stiefel-Whitney numbers of
$\mathbb{RP}^{2^s-1}$ vanish, consistent with these manifolds being boundaries
in the cases $1\le s\le3$. Explicit witnesses are the disk bundles of $\gamma^{\otimes2}$ over $\mathbb{CP}^k$ for $k=0,1,3$, where $\gamma$ is the tautological complex line; their boundaries are $\mathbb{RP}^{2k+1}$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, the real projective space $\mathbb{RP}^n$ with its smooth structure and tautological line bundle $\gamma$, all cohomology with $\mathbb F_2$ coefficients unless stated, and the inward/outward normal line data below; AC is inherited from the Stiefel-Whitney class construction as recorded in [F2].

[F1] [[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]: $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ with $|a|=1$, and restriction along the skeletal inclusion is an isomorphism in degrees at most $n$, sending $a$ to the unique nonzero degree-one class of $\mathbb{RP}^n$ for $n\ge1$; [[lem-real-projective-space-cellular-homology-and-pinch-map]] gives the finite CW structure with one cell in each dimension and the mod-two homology $\mathbb F_2$ in every degree $0\le j\le n$.

[F2] [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] defines the Stiefel-Whitney classes over admissible bases and gives $w_1(L)=x_L$, $w(L)=1+w_1(L)$ for a real line $L$; [[thm-naturality-of-stiefel-whitney-classes]] gives naturality and isomorphism invariance; [[thm-whitney-sum-formula-for-stiefel-whitney-classes]] gives $w(E\oplus F)=w(E)w(F)$ and $w(E\oplus\varepsilon^r)=w(E)$; [[prop-first-stiefel-whitney-class-classifies-orientability]] identifies $w_1$ as the classifying class of line bundles. [[def-axiom-of-choice]] is assumed exactly as declared by these suppliers.

[F3] For a real line $\ell\subset\mathbb R^{n+1}$, graph coordinates identify $T_\ell\mathbb{RP}^n$ with $\operatorname{Hom}(\ell,\ell^\perp)$: the derivative of a moving spanning vector is taken modulo $\ell$, independently of its rescaling. These identifications vary smoothly in graph charts. The metric identifies $\ell^*\cong\ell$, while $\operatorname{Hom}(\ell,\ell)$ is the trivial scalar line. Splitting $\mathbb R^{n+1}=\ell\oplus\ell^\perp$ therefore gives $\varepsilon^1\oplus T\mathbb{RP}^n\cong\operatorname{Hom}(\gamma,\underline{\mathbb R}^{n+1})\cong(n+1)\gamma$. This proves the tangent splitting directly, including $n=0$. For $n\ge1$ the tautological line is nonorientable: along the loop $t\mapsto[\cos(\pi t)e_1+\sin(\pi t)e_2]$ a continuous spanning vector returns with the opposite sign. Thus [F2] gives $w_1(\gamma)\ne0$, identifying it with the unique nonzero degree-one class $x$ of [F1]; for $n=0$ both are zero.

[F4] [[def-stiefel-whitney-number-of-a-closed-manifold]] defines $w^{I}[M]=\langle w^{I}(TM),[M]\rangle$ for monomials of total degree $n$, with the canonical mod-two fundamental class and the componentwise convention; [[def-fundamental-class-of-a-compact-oriented-manifold]] characterizes the canonical mod-two fundamental class $[\mathbb{RP}^n]$ by its local generators; [[def-kronecker-evaluation-pairing]] is evaluation of cocycles on cycles; [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] makes evaluation $H^n(X;\mathbb F_2)\to\operatorname{Hom}_{\mathbb F_2}(H_n(X;\mathbb F_2),\mathbb F_2)$ an isomorphism under AC.

[F5] [[prop-boundaries-have-zero-stiefel-whitney-numbers]]: every Stiefel-Whitney number of a closed manifold that is the boundary of a compact manifold vanishes, so a closed manifold with a nonzero number is not null-cobordant ([[def-null-cobordant-closed-manifold]]).

[F6] [[def-complex-projective-bundle-and-tautological-complex-line]] supplies the complex tautological line; [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]] supplies its tensor square used in the explicit boundary construction.

## Verification

1.1 For $n\ge1$, [F1] makes $H^j(\mathbb{RP}^n;\mathbb F_2)\cong\mathbb F_2$ for $0\le j\le n$ and zero above, generated by the powers of $x$, and $x^{n+1}=0$; for $n=0$ the space is a point and $x=0$ in $H^1$, with the ring $\mathbb F_2$. By [F4] and field duality, the evaluation pairing $H^n(\mathbb{RP}^n;\mathbb F_2)\times H_n(\mathbb{RP}^n;\mathbb F_2)\to\mathbb F_2$ is a nondegenerate pairing of one-dimensional spaces, so the nonzero classes $x^n$ and $[\mathbb{RP}^n]$ pair to $1$, as asserted. [F1, F4]

1.2 The line bundle computation [F2] gives $w(\gamma)=1+x$ by the last calculation in [F3], and [F3] gives $T\mathbb{RP}^n\oplus\varepsilon^1\cong(n+1)\gamma$. Applying the Whitney formula and the trivial-summand stability [F2] to this isomorphism yields $w(T\mathbb{RP}^n)=w(T\mathbb{RP}^n\oplus\varepsilon^1)=w(\gamma)^{n+1}=(1+x)^{n+1}$, and naturality makes the identification independent of the chosen isomorphism because isomorphic bundles have equal classes. Expanding in $\mathbb F_2[x]/(x^{n+1})$ gives $w_i(T\mathbb{RP}^n)=\binom{n+1}{i}x^i$ for $0\le i\le n$. [F2, F3]

2.1 Let $I=(i_1,\dots,i_r)$ be a partition of $n$ and $w^{I}=w_{i_1}\cdots w_{i_r}$. By step 1.2,[F4] $$w^{I}[\mathbb{RP}^n]=\bigl\langle\textstyle\prod_{j}\binom{n+1}{i_j}x^{i_j},[\mathbb{RP}^n]\bigr\rangle=\Bigl(\prod_{j}\binom{n+1}{i_j}\Bigr)\langle x^n,[\mathbb{RP}^n]\rangle=\prod_{j}\binom{n+1}{i_j}\bmod 2,$$ using step 1.1 for the top evaluation; for the monomial of total degree $n$ with $r=1$ and $i_1=n$ this gives the top number $w_n[\mathbb{RP}^n]=\binom{n+1}{n}=n+1\bmod2$, which is $1$ for even $n$ and $0$ for odd $n$. [F4, step 1.1, step 1.2]

3.1 For even $n=2k$ the top number is $1$, so [F5] obstructs null-cobordism. If $n=2^s-1$ with $s\ge1$, characteristic two gives $(1+x)^{2^s}=1+x^{2^s}=1$ in the truncated ring; all positive-degree characteristic numbers vanish. For the stated boundary witnesses put $L=\gamma^{\otimes2}\to\mathbb{CP}^k$, with its tensor metric. Its unit disk bundle is a compact smooth manifold with boundary its unit circle bundle: local smooth unitary frames give charts $U\times D^2$, with boundary $U\times S^1$, and finitely many compact trivializing neighbourhoods cover the compact base. The smooth map $S^{2k+1}\to S(L)$, $v\mapsto([v],v\otimes v)$, is surjective and identifies precisely $v$ and $-v$. In a local unitary frame it is the circle map $z\mapsto z^2$, so the induced bijection $\mathbb{RP}^{2k+1}\to S(L)$ and its local inverses are smooth. Taking $k=0,1,3$ gives the three claimed boundaries. [F3, F5, F6, step 1.1, step 2.1, construct]


4.1 For $n=0$ the empty characteristic monomial is $1$ and evaluates to $1$ on the point, so this case is nonbounding; it is excluded from the $s\ge1$ vanishing assertion. For $n=1$ the above witness is the disk over a point. The empty manifold is allowed by the library conventions and has zero numbers, though it is not a member of the projective-space family. The calculation and explicit witnesses use no choice beyond the declared characteristic-class and duality suppliers. [F2, F4, F5, step 1.1, step 3.1] ∎
