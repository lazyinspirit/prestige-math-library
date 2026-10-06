---
id: thm-milnor-lambda-invariant-is-well-defined-modulo-seven
kind: theorem
title: "The Milnor lambda invariant is well defined modulo seven"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-lambda-candidate-from-a-filling, lem-relative-pontryagin-square-glues-across-a-seven-boundary, lem-boundary-middle-form-is-well-defined-and-glues, cor-eight-dimensional-signature-formula, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
dependency_level: 12
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 399-401, Theorems 1 and 2 and the invariance of lambda modulo 7"
    - title: "Friedrich Hirzebruch, Topological Methods in Algebraic Geometry, the signature theorem in dimension eight"
      url: "https://link.springer.com/book/10.1007/978-3-662-30697-1"
      locator: "the eight-dimensional signature formula 45 sigma = 7 p_2 - p_1^2"
---

## Statement

Assume the Axiom of Choice as inherited from the duality and signature
suppliers. Let $M$ be a closed oriented smooth seven-manifold with
$H^3(M;\mathbb Z)=H^4(M;\mathbb Z)=0$ and at least one supplied compact oriented
smooth eight-dimensional filling $W$. Then
$$\lambda(M):=2q(W)-\sigma(W)\pmod 7$$
is independent of the filling and is invariant under orientation-preserving
boundary diffeomorphisms. Reversing the orientation of $M$ negates
$\lambda(M)$. No assertion of the existence of a filling for every such $M$ is
made.

## Facts & Assumptions

**Given:** A closed oriented smooth seven-manifold $M$ with $H^3(M;\mathbb Z)=H^4(M;\mathbb Z)=0$ and two supplied compact oriented fillings $W,W'$ with $\partial W=M=\partial W'$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] The filling-level candidate is $\lambda_W(M)=2q(W)-\sigma(W)\bmod 7$, with $q(W)=\langle\bar p_1(W)\smile\bar p_1(W),[W,M]\rangle$ ([[def-milnor-lambda-candidate-from-a-filling]]).

[L2] For $N=W\cup_M(-W')$, the glued closed oriented manifold satisfies $\langle p_1(TN)^2,[N]\rangle=q(W)-q(W')$ ([[lem-relative-pontryagin-square-glues-across-a-seven-boundary]]).

[L3] Under the integral vanishing hypotheses, $\sigma(N)=\sigma(W)-\sigma(W')$ ([[lem-boundary-middle-form-is-well-defined-and-glues]]).

[L4] The closed eight-dimensional signature formula states $45\sigma(N)=7\langle p_2(TN),[N]\rangle-\langle p_1(TN)^2,[N]\rangle$ ([[cor-eight-dimensional-signature-formula]]).

## Proof

**Proof technique:** direct.

1.1 Glue the two fillings to $N=W\cup_M(-W')$ and apply [L4]; reducing modulo $7$ gives $45\equiv3$, so $3\sigma(N)+p_1^2[N]\equiv0$, that is $p_1^2[N]\equiv4\sigma(N)$ and $2p_1^2[N]-\sigma(N)\equiv0\pmod 7$. [L1, L4, A1]

2.1 Substituting [L2] and [L3] into step 1.1 gives $2(q(W)-q(W'))-(\sigma(W)-\sigma(W'))\equiv0\pmod 7$, equivalently $\lambda_W(M)=\lambda_{W'}(M)$; hence the class $\lambda(M)\in\mathbb Z/7$ is independent of the supplied filling. [step 1.1, L1, L2, L3]

3.1 Let $f:M\to M'$ be an orientation-preserving diffeomorphism of closed oriented seven-manifolds. The same filling $W$, with its boundary identification changed by $f$, is a filling of $M'$. The relative fundamental class, tangent bundle, relative lift and boundary middle form on $W$ are unchanged, so it computes the same candidate. By step 2.1 every supplied filling of $M'$ gives this value. Hence $\lambda(M')=\lambda(M)$. [step 2.1, L1]

4.1 Reversing the orientation of the filling reverses the relative fundamental class and the boundary orientation, so both $q$ and $\sigma$ change sign while $p_1$ is orientation-independent; therefore $\lambda$ is negated. [step 3.1, L1]

5.1 Consequently $\lambda(M)=2q(W)-\sigma(W)\bmod7$ is a well-defined invariant of the oriented boundary, invariant under orientation-preserving boundary diffeomorphism and negated by orientation reversal, with no filling-existence assertion. [step 2.1, step 4.1] ∎
