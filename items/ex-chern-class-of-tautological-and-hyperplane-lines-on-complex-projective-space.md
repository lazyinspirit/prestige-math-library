---
id: ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space
kind: example
title: Chern class of tautological and hyperplane lines on complex projective space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-first-chern-class-of-tensor-dual-and-conjugate-lines, thm-first-chern-class-classifies-complex-line-bundles, thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range, def-clutching-construction-for-bundles-over-a-suspension, lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, def-chern-classes-from-the-projective-bundle-relation, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The canonical line bundle over CP^n, printed pp.8-9 and 77-79"
---

## Example

Assume AC. Let $\gamma\to\mathbb{CP}^n$ be the tautological complex line and
$\gamma^*$ its dual, the hyperplane line, for $n\geq1$. Put
$$x:=c_1(\gamma^*)\in H^2(\mathbb{CP}^n;\mathbb Z)\cong\mathbb Z.$$
Then $x$ is a generator, and
$$c_1(\gamma)=-x,\qquad c(\gamma^*)=1+x.$$
With the pair's normalization, $x$ is the positive generator: it restricts on
the standard $\mathbb{CP}^1$ to the negative of the tautological Hopf class,
and $c_1(\gamma)$ is the negative generator.

## Facts & Assumptions

**Given:** AC, the tautological line $\gamma$ over $\mathbb{CP}^n$ with $n\geq1$, and its dual $\gamma^*$.

[A1] The Axiom of Choice is assumed, exactly as inherited from the classification and clutching suppliers ([[def-axiom-of-choice]]).

[F1] For complex lines, $c_1(L\otimes M)=c_1(L)+c_1(M)$, $c_1(L^*)=-c_1(L)$, and $L\otimes L^*\cong\varepsilon^1$ ([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).

[F2] $c_1:\operatorname{Pic}_{\mathrm{top}}(\mathbb{CP}^n)\to H^2(\mathbb{CP}^n;\mathbb Z)$ is an isomorphism, so a nontrivial line bundle has nonzero $c_1$ ([[thm-first-chern-class-classifies-complex-line-bundles]]).

[F3] Line bundles over $S^2$ are classified by clutching maps up to homotopy, so a line clutched by a map of nonzero degree is nontrivial ([[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]]).

[F4] Under the fixed upper-to-lower coefficient convention of the clutching construction, the map $g(z)=z$ clutches the tautological Hopf line $\gamma$ over $S^2=\mathbb{CP}^1$, which is the restriction of the tautological line over $\mathbb{CP}^n$ ([[def-clutching-construction-for-bundles-over-a-suspension]]).

[F5] $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[t]/(t^{n+1})$ with $t=e(\gamma_{\mathbb R})=c_1(\gamma)=-x$ the class of the tautological line in the published convention, and the standard inclusion $\mathbb{CP}^1\hookrightarrow\mathbb{CP}^n$ pulls $t$ back to $t$, so restriction to $\mathbb{CP}^1$ is an isomorphism on $H^2$ and detects generation there ([[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]).

[F6] For a complex line $c_i=0$ for $i\geq2$ and $c_0=1$ ([[def-chern-classes-from-the-projective-bundle-relation]]).

## Verification

**Proof technique:** direct.

1.1 The dual identity: $\gamma\otimes\gamma^*\cong\varepsilon^1$ by [F1], so applying $c_1$ and using additivity gives $c_1(\gamma)+c_1(\gamma^*)=c_1(\varepsilon^1)=0$, that is $c_1(\gamma)=-c_1(\gamma^*)=-x$. [F1, given]

1.2 Nontriviality of the restricted tautological bundle: by [F4] the bundle $\gamma|_{\mathbb{CP}^1}$ is clutched by the degree-one map $z\mapsto z$, hence is nontrivial by [F3]; by the isomorphism of [F2] its first Chern class is nonzero. [F2, F3, F4]

2.1 Generation of $x$: by [F1], $x|_{\mathbb{CP}^1}=c_1(\gamma^*|_{\mathbb{CP}^1})=-c_1(\gamma|_{\mathbb{CP}^1})$, which is nonzero by step 1.2; by [F5] the restriction $H^2(\mathbb{CP}^n;\mathbb Z)\to H^2(\mathbb{CP}^1;\mathbb Z)$ is an isomorphism of infinite cyclic groups, so $x$ is a generator of $H^2(\mathbb{CP}^n;\mathbb Z)\cong\mathbb Z$. [F1, F5, step 1.1, step 1.2]

3.1 Total class of the hyperplane line: since $\gamma^*$ has rank one, [F6] gives $c(\gamma^*)=1+c_1(\gamma^*)=1+x$, the higher Chern classes vanishing. [F6, step 2.1]

4.1 Boundary cases. For $n=1$ the inclusion $\mathbb{CP}^1\subseteq\mathbb{CP}^n$ is the identity and the computation of step 2.1 is the statement that $x$ is a generator of $H^2(\mathbb{CP}^1;\mathbb Z)$; the negative sign displayed is the pair's convention, under which $c_1$ of the tautological Hopf line is the negative generator. The rank-one case is exactly the range where [F6] applies; the empty base does not occur. The coefficient ring $\mathbb Z$ is nonzero, so a nonzero class is genuinely a generator of the infinite cyclic group. AC is used only through [A1] in the classification and clutching suppliers. [A1, F1, F6, step 2.1] ∎

## Source notes

The identities $c_1(\gamma)=-c_1(\gamma^*)$ and $c(\gamma^*)=1+c_1(\gamma^*)$ are the standard computation of Hatcher section 3.1; the sign convention identifying $c_1$ of the dual tautological line with the evaluation-normalized generator is the normalization fixed by this pair, and the opposite convention for $c_1$ of the tautological line appears in the sibling in-run item on the universal oriented two-plane. Only the normalization-free identity $c_1(\gamma)=-c_1(\gamma^*)$ is used below.
