---
id: thm-real-clifford-thom-isomorphism
kind: theorem
title: Real Clifford–Thom isomorphism
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- thm-stable-clifford-hopf-decomposition-over-sphere-bundles
- lem-uniqueness-of-stable-clifford-hopf-decomposition
- cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac
- lem-finite-cw-relative-ko-triples-and-homotopy-invariance
- def-reduced-relative-ko-and-ko-compact-support
- thm-real-complex-clifford-algebra-classification
- thm-subordinate-partitions-of-unity-exist
- prop-compact-spaces-are-paracompact
- lem-ac-supplies-dependent-choice-for-vector-bundle-constructions
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 12
---

## Statement

Assume AC. For $X$ finite CW and $V\to X$ oriented Euclidean of positive rank $n=4m$, let $K_{C(V)}(X)$ be the Grothendieck group of ungraded real $C(V)$-module bundles. Then
$$\Psi_V:K_{C(V)}(X)\longrightarrow\widetilde{KO}^0(\operatorname{Th}(V)),\qquad [\Lambda]\longmapsto[H(\Lambda)]-\pi^*[\Lambda^+]$$
is an isomorphism, where the last expression is identified with the kernel of restriction to the north section. The decomposition map $T:KO^0(X)\oplus K_{C(V)}(X)\to KO^0(\widehat V)$ has zero kernel, and $\ker(\chi T)=KO^0(X)\oplus\{0\}$ for $\chi(z)=z-\pi^*s_+^*z$. With the standard ABS relative-triple sign, the volume-positive symbol is $\Phi_V=-\Psi_V$, also an isomorphism. Rank zero is separately the identity $KO^0(X)\cong\widetilde{KO}^0(X_+)$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] The geometric stable decomposition exists for ungraded modules with volume chirality. ([[thm-stable-clifford-hopf-decomposition-over-sphere-bundles]]).

[F2] The decomposition is unique under the same trivial and regular-Hopf stabilizers. ([[lem-uniqueness-of-stable-clifford-hopf-decomposition]]).

[F3] Ordinary real bundles over finite CW bases have finite trivial complements. ([[cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac]]).

[F4] Real relative triples modulo elementary extensions and stable homotopy identify with the quotient-space group for compact Hausdorff pairs. Ordinary bundles on compact Hausdorff bases have finite trivial complements; equality of their classes is equality after common trivial stabilization. ([[lem-finite-cw-relative-ko-triples-and-homotopy-invariance]], [[def-reduced-relative-ko-and-ko-compact-support]]).

[F5] In rank $n=4m$, the negative-square Clifford algebra is a simple matrix algebra over $\mathbb R$ or $\mathbb H$; its finite-dimensional modules therefore embed in finite copies of its regular module. The matrix-algebra module embedding is also justified explicitly in step 1.1. ([[thm-real-complex-clifford-algebra-classification]]).

[F6] Under AC and DC, paracompact Hausdorff covers admit subordinate locally finite partitions of unity. Finite CW bases are compact Hausdorff, so the required partitions can be taken finite; AC supplies DC. ([[thm-subordinate-partitions-of-unity-exist]], [[prop-compact-spaces-are-paracompact]], [[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

## Proof

**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

1.1 First construct compatible metrics and local regular embeddings without assuming Clifford-local triviality of the module bundle. On a local orthonormal frame of $V$, the signed Clifford monomials form a finite group $G=\{\pm e_I\}$, closed under multiplication by the Clifford relations. Average any ordinary bundle metric over its action. Each frame generator is then orthogonal and has square $-I$, hence is skew-adjoint. For arbitrary $v$, the Clifford relations give $c(v)^*c(v)=\|v\|^2I$, so this metric compatibility is independent of the frame. Patch these local metrics with a finite partition of unity from [F6]; positive definite compatible metrics form a convex set, so the resulting global metric is compatible. Apply the same construction to regular module bundles. For the fiber embedding, [F5] gives $C(V_x)\cong M_r(D)$, $D=\mathbb R$ or $\mathbb H$. Its matrix units decompose any module into copies of the column module: $L=\bigoplus_i E_{ii}L$, and $E_{i1}$ identifies each $E_{11}L$ with $E_{ii}L$. A finite $D$-basis of $E_{11}L$ identifies $L$ with a finite sum of column modules, while the regular module contains $r$ such columns. Thus enough regular copies contain $L$. Fix such an intertwining injection at one point. In ordinary bundle charts extend its matrix constantly to a local real-linear map $a_x$; this uses no module-bundle trivialization. The averaged map $\bar a_x=\frac1{|G|}\sum_{g\in G}\rho_{\mathrm{reg},x}(g)^{-1}a_x\rho_{L,x}(g)$ is continuous and intertwines $G$, by reindexing $g\mapsto gh$, and hence intertwines the Clifford algebra generated by $G$. At the chosen point it equals the original injection. Injectivity is open for finite matrices, so it remains an embedding on a neighborhood. Cover the compact base by finitely many such neighborhoods and choose a subordinate partition $(\rho_i)$ with [F6]. The weighted direct sum $a=\bigoplus_i\sqrt{\rho_i}\,\bar a_i$ extends by zero off each chart, because each support lies inside its chart, and is injective at every point. It is a global module map into finitely many regular copies. Since source and target have compatible metrics, $a^*a$ commutes with all Clifford generators; hence $a(a^*a)^{-1/2}$ is an isometric module embedding, and its orthogonal complement is a module. Consequently equality of module Grothendieck classes is equivalently isomorphism after equal regular summands: complete a common arbitrary stabilizer to a regular module. The ordinary version uses [F3]. [A1, F3, F5, F6, construct, algebra]


2.1 Define $T(e,\lambda)=\pi^*e+[H(\lambda)]$ by additivity of clutching. For surjectivity, [F1] expresses any actual bundle after trivial and regular-Hopf shifts as a pulled-back bundle plus a Hopf bundle; move the shifts to the other side, then pass to differences. For injectivity, equality of two such actual sums in $KO^0(\widehat V)$ gives an isomorphism after a common arbitrary bundle. The total sphere-bundle space is compact Hausdorff, so [F4] supplies a complement there; adding it makes the stabilizer trivial, and [F2] applies. Both coordinates agree stably. For arbitrary formal coordinates first move their negative parts to opposite sides and repeat this argument. Hence $T$ is an isomorphism of groups, with zero kernel. [F1, F2, F3, F4, step 1.1, construct]


3.1 Under $T$, restriction to the north section is $(e,\lambda)\mapsto e+[\lambda^+]$. Thus its kernel is the graph $\{(-[\lambda^+],\lambda)\}$. The map $\chi(z)=z-\pi^*s_+^*z$ is a projection onto this section kernel, with kernel $\pi^*KO^0(X)$. Consequently $\chi T$ has kernel $KO^0(X)\oplus\{0\}$ and identifies the remaining summand with the section kernel. This proves the asserted cancellation and kernel computations before using relative KO. [step 2.1, algebra]


4.1 We prove the relative section-kernel assertion from the actual triple model [F4]. Let $Z=\widehat V$ and $A=s_+(X)$; the retraction is $r=s_+\pi:Z\to A$. Forgetting a relative triple $(E,F,g)$ gives $[E]-[F]$, whose restriction to $A$ vanishes. Conversely, if $[E|_A]=[F|_A]$, the common-trivial-stabilization clause of [F4] supplies an isomorphism after adding the same trivial bundle to both, hence a triple lifting the original ordinary class. Thus the image is the restriction kernel. For injectivity, suppose a triple forgets to zero in $KO^0(Z)$. By [F4], stabilize both entries trivially so there is a global isomorphism between them. Transport along it to represent the triple as $(E,E,h)$ with an automorphism $h$ on $E|_A$. Add the elementary triple of a global complement of $E$, also supplied by [F4], and choose a trivialization of the resulting common bundle. The stabilized section automorphism is now a matrix map $b:A\to\mathrm{GL}_N(\mathbb R)$. The map $b\circ r:Z\to\mathrm{GL}_N(\mathbb R)$ extends it globally, so this triple is elementary and its relative class is zero. Hence forgetting is injective and identifies $KO^0(Z,A)$ with $\ker(s_+^*)$. The quotient-space clause of [F4] then gives $\ker(s_+^*)\cong KO^0(\widehat V,s_+X)=\widetilde{KO}^0(\widehat V/s_+X).$ The disk-half description identifies the quotient with $\operatorname{Th}(V)$. Therefore the remaining summand of step 3.1 maps by exactly $[\Lambda]\mapsto[H(\Lambda)]-\pi^*[\Lambda^+]$, proving the asserted isomorphism. With the standard relative convention $[E,F,\sigma]$ restricting to $[E]-[F]$ at the disk zero section, the volume-positive symbol is its negative: the uncollapsed south restriction of this reduced Hopf class is $[\Lambda^-]-[\Lambda^+]$. Hence $\Phi_V=-\Psi_V$; the sign must be retained when choosing a multiplicative Bott class. At rank zero, $\operatorname{Th}(0_X)=X_+$ and the basepoint split gives the separate identity. No raw graded-module group is identified with $K_{C(V)}(X)$. [F4, step 3.1, construct, algebra] ∎
