---
id: lem-author-4f94f7982b0d-em-p1-model
kind: lemma
title: An actual non-A¹ P¹-spectrum for the supplied EM complexes
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - thm-author-4f94f7982b0d-em-graded-input
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - math:def-axiom-of-choice
  - lem-adjudicate-7e43085ab36e-classical-smooth-site
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  thm-author-4f94f7982b0d-em-graded-input: mathematical-premise
  thm-author-4f94f7982b0d-p1-spectrum-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-7e43085ab36e-classical-smooth-site: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 18
formulation_deps:
  - def-motivic-cohomology
  - thm-author-4f94f7982b0d-em-graded-input
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - math:def-axiom-of-choice
  - lem-adjudicate-7e43085ab36e-classical-smooth-site
argument_deps:
  - def-motivic-cohomology
  - thm-author-4f94f7982b0d-em-graded-input
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - math:def-axiom-of-choice
  - lem-adjudicate-7e43085ab36e-classical-smooth-site
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. For every qcqs scheme $S$ over a field $k$, restriction of the supplied EM complexes to smooth qcqs $S$-schemes admits a canonical homotopy-commutative motivic ring spectrum model $\mathcal E_S$ in the non-$\mathbb A^1$ category of Annala–Iwasa. Its nonnegative levels are $\Omega^\infty A_n$ where $A_n(Y)=\mathbb Z(n)_{\rm mot}(Y)[2n]$. For every $i\geq0$ its diagonal group $\mathcal E_S^{2i,i}(Y)$ is naturally $H^{2i,i}_{\rm mot}(Y,\mathbb Z)$, with the actual product. No $\mathbb A^1$ localization is taken.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed size bounds discharge the selected graded/PBF input [[thm-author-4f94f7982b0d-em-graded-input]] when constructing the graded algebra and using its actual projective-line equivalence in steps 1.1–2.1. The model and coefficient-stabilization constructions retain those same bounds.

[F1] [[thm-author-4f94f7982b0d-em-graded-input]] supplies the natural commutative graded spectra $A_n$, the actual pointed class $b=c_1(\mathcal O(1))$ on $(\mathbb P^1,\infty)$, and the complex-level P¹ formula.

[F2] [[thm-author-4f94f7982b0d-p1-spectrum-input]] supplies the symmetric P¹-spectrum model: a commutative symmetric sequence with a map from the free graded sphere algebra on P¹ in degree1 is a commutative lax P¹-spectrum; it is a P¹-spectrum when the adjoint bonding maps are equivalences. It also supplies coefficient stabilization and the evaluation/shift rule.

[F3] [[lem-adjudicate-7e43085ab36e-classical-smooth-site]] identifies the entire classical smooth qcqs Zariski site over the classical base $S$ with the derived smooth site in [F2], including mapping spaces, covers, sheaves of ordinary spectra, pointed projective lines and cotensors. Use the extension $B^{\rm der}(Y)=B(t_0Y)$; its restriction to classical test schemes is the original $B$.

## Proof
**Given:** $S$ qcqs over a field, the Axiom of Choice and the fixed compatible site and universe bounds.

**Goal:** Construct the actual model and diagonal identification.

1.1 First use [F3] to extend the restrictions of the EM sheaves from the classical smooth site to the source-native derived smooth site. Their Nisnevich descent in [F1] implies Zariski descent before this transport; [F3] preserves it and their coherent graded products. Write $A_n$ for these transported sheaves, whose values on every classical test scheme remain $\mathbb Z(n)_{\rm mot}(Y)[2n]$. Use this graded algebra from [F1], with trivial symmetric-group actions on each level and the induced coherent symmetric products. Equivalently restrict its grading along the symmetric monoid $B\Sigma\mathbb N\to\mathbb N$. The class $b:\Sigma^\infty(\mathbb P^1,\infty)\to A_1$ defines an algebra map from the free graded sphere algebra of [F2]. Thus $A$ is a commutative lax P¹-spectrum in Zariski sheaves of ordinary spectra; its bonding maps are multiplication by this very class. [A1, F1, F2, F3, construct]

2.1 By [F3], it suffices to check the adjoint bonding map on classical test schemes, where projective-line cotensor is the original pointed-projective-line construction. The adjoint map $A_n(Y)\to\operatorname{fib}(A_{n+1}(\mathbb P^1_Y)\to A_{n+1}(Y))$ is the second summand of the actual P¹ formula in [F1], hence an equivalence. The fiber uses the infinity section, on which $b$ is zero with the trivial-line nullhomotopy supplied by its pointed Picard map. Consequently $A$ is already an Ω-P¹-spectrum, so its levels need no replacement by unrelated objects. [A1, F1, F2, F3, step 1.1]

3.1 Apply the lax monoidal right adjoint Ω∞ of coefficient stabilization in [F2]. It preserves the adjoint bonding equivalences and gives the stated ring spectrum $\mathcal E_S$ with levels $\Omega^\infty A_n$. By the shift/evaluation rule, $\mathcal E_S^{2i,i}(Y)=\pi_0 A_i(Y)=H^{2i}(\mathbb Z(i)_{\rm mot}(Y))$. The maps arise from the actual graded products, so this identification preserves their multiplication and naturality. The EM constructions restrict from qcqs schemes over the prime field by [F1], and [F3] identifies their smooth site with the target site for every classical qcqs $S$, including singular $S$. [F1, F2, F3, step 1.1, step 2.1] ∎
