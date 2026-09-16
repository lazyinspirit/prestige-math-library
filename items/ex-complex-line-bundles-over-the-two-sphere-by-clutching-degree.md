---
id: ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree
kind: example
title: Complex line bundles over the two-sphere by clutching degree
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-first-chern-class-classifies-complex-line-bundles, thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range, def-clutching-construction-for-bundles-over-a-suspension, cor-geometric-unit-circle-has-fundamental-group-z, prop-first-chern-class-of-tensor-dual-and-conjugate-lines, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Example 1.10 and section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Clutching functions for line bundles over S^2, printed pp.22-24, 86-88"
---

## Example

Assume AC. For $d\in\mathbb Z$ let $E_d\to S^2$ be the complex line clutched by
$g_d(z)=z^d$ in the upper-to-lower convention of
[[def-clutching-construction-for-bundles-over-a-suspension]], and let
$$u:=c_1(E_1)\in H^2(S^2;\mathbb Z)\cong\mathbb Z,$$
the class of the tautological Hopf line. Then $u$ is a generator, the
orientation of $S^2$ is fixed by requiring $\langle u,[S^2]\rangle=+1$ in this
normalization, and for every $d$
$$c_1(E_d)=d\,u.$$
In particular the clutching degree $d$ and the first Chern number
$\langle c_1(E_d),[S^2]\rangle=d$ give the same $\mathbb Z$-classification of
complex line bundles over $S^2$.

## Facts & Assumptions

**Given:** AC, the clutching construction over $S^2=\Sigma S^1$, and the maps $g_d(z)=z^d$.

[A1] The Axiom of Choice is assumed, exactly as inherited from the classification suppliers ([[def-axiom-of-choice]]).

[F1] The clutching construction turns a map $g:S^1\to\operatorname{GL}_1(\mathbb C)$ into a complex line over $S^2$, and two clutching maps give isomorphic bundles exactly when they are homotopic in the stable range; for $\mathbb C$, $q=2$, the classification is $\pi_1(\operatorname{GL}_1(\mathbb C))\cong\mathbb Z$ ([[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]], [[def-clutching-construction-for-bundles-over-a-suspension]]).

[F2] $c_1:\operatorname{Pic}_{\mathrm{top}}(S^2)\to H^2(S^2;\mathbb Z)$ is a natural group isomorphism, tensor product corresponding to addition ([[thm-first-chern-class-classifies-complex-line-bundles]]).

[F3] Under the fixed upper-to-lower convention, the map $g(z)=z$ clutches the tautological Hopf line over $S^2=\mathbb{CP}^1$ ([[def-clutching-construction-for-bundles-over-a-suspension]]).

[F4] $\pi_1(S^1,(1,0))\cong\mathbb Z$, and under this isomorphism the loop $t\mapsto(\cos 2\pi nt,\sin 2\pi nt)$, i.e. $z\mapsto z^n$, corresponds to $n$ for every $n\in\mathbb Z$ ([[cor-geometric-unit-circle-has-fundamental-group-z]]).

[F5] For complex lines $c_1(L\otimes M)=c_1(L)+c_1(M)$ and $c_1(L^*)=-c_1(L)$ ([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).


## Verification

**Proof technique:** direct.

1.1 Multiplication of clutching functions corresponds to tensor product: $E_g\otimes E_h\cong E_{gh}$, because the transition functions multiply in the clutching convention; in particular $E_d\otimes E_{d'}\cong E_{d+d'}$ and $E_{-d}\cong E_d^*$, since $z^{-d}=(z^d)^{-1}$ and dualizing inverts transition functions. [F1, F5, given]

1.2 The class $u=c_1(E_1)$ is nonzero, hence a generator of $H^2(S^2;\mathbb Z)\cong\mathbb Z$: the bundle $E_1=\gamma$ is clutched by the degree-one map $z\mapsto z$, which is not nullhomotopic by [F4] and [F1], so $E_1$ is nontrivial, and by the isomorphism [F2] its first Chern class cannot vanish. [F1, F2, F3, F4]

2.1 For $d\geq0$, iterating step 1.1 and additivity [F2] gives $c_1(E_d)=d\,c_1(E_1)=d\,u$; for $d<0$, $E_d\cong E_{|d|}^*$ by step 1.1 and the dual formula of [F5] gives $c_1(E_d)=-|d|u=d\,u$. [F2, F5, step 1.1, step 1.2]

3.1 The pairing with the fundamental class: by step 1.2 the class $u$ generates $H^2(S^2;\mathbb Z)$, so there is a unique orientation $[S^2]$ with $\langle u,[S^2]\rangle=+1$; this is the Hopf normalization of the statement, and then $\langle c_1(E_d),[S^2]\rangle=d$ by step 2.1. [step 2.1]

4.1 Boundary cases. For $d=0$ the clutching map is constant, $E_0$ is trivial and $c_1=0=0\cdot u$. For $d=1$ we have $c_1(E_1)=u$ by definition; for $d=-1$ the bundle is the dual of the Hopf line and $c_1=-u$. Negative exponents are covered by the dual computation in step 2.1 and by [F4], which includes $d<0$. The coefficient ring $\mathbb Z$ is nonzero, so a nonzero multiple $d\cdot u$ of a generator is nonzero exactly when $d\neq0$, giving the claimed classification. AC is used only through [A1]. [A1, F1, F4, step 2.1] ∎

## Source notes

Hatcher, Example 1.10 and section 3.1 (printed pp. 22-24 and 86-88), computes the clutching classification of line bundles over $S^2$ and the first Chern class of the clutching construction. The explicit reversal of the upper-to-lower convention for $d<0$ is the inversion of transition functions used in [[ex-hopf-line-bundle-over-the-two-sphere-by-clutching]].
