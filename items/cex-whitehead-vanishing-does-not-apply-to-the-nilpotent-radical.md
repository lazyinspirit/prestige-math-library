---
id: cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical
kind: counterexample
title: "Whitehead vanishing does not apply to the nilpotent radical"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [ex-kostant-n-cohomology-for-sl2, thm-first-whitehead-lemma, thm-second-whitehead-lemma, def-chevalley-eilenberg-cochains, def-chevalley-eilenberg-differential, def-lie-algebra-cohomology, def-special-linear-lie-algebra-sl-two, thm-root-sl-two-triple, def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed pp.1–2, cochains and invariants as background; the one-dimensional nilpotent counterexample is computed locally"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.2 printed pp.64–70"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.2, printed pp.64–68, the cochain complex and the degree-one computation"
---

## Statement refuted

**False claim.** The semisimplicity hypothesis of the Whitehead lemmas can be replaced by nilpotency of the coefficient Lie algebra: for every finite-dimensional nilpotent Lie algebra $\mathfrak a$ over a field of characteristic zero and every finite-dimensional $\mathfrak a$-module $M$, one has $H^1(\mathfrak a,M)=0$.

## Facts & Assumptions

**Given:** $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$, the positive nilpotent subalgebra $\mathfrak n^+=\mathbb C e_\alpha$ (abelian, one dimensional, nilpotent), and the trivial one-dimensional module $\mathbb C$.

[L1] For the zero bracket, $[x,y]=0$ for all $x,y\in\mathfrak n^+$, and the trivial action satisfies $x\cdot a=0$ for all $a\in\mathbb C$ ([[def-special-linear-lie-algebra-sl-two]], [[thm-root-sl-two-triple]], [[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]]).

[L2] The differential is $(d\omega)(x_0,\dots,x_q)=\sum_i(-1)^ix_i\cdot\omega(\dots\widehat{x_i}\dots)+\sum_{i<j}(-1)^{i+j}\omega([x_i,x_j],\dots)$, and cohomology is kernel modulo image ([[def-chevalley-eilenberg-differential]], [[def-chevalley-eilenberg-cochains]], [[def-lie-algebra-cohomology]]).

[L3] The Whitehead lemmas require $\mathfrak g$ finite-dimensional semisimple over a characteristic-zero field and $M$ finite dimensional: then $H^1(\mathfrak g,M)=0$ and $H^2(\mathfrak g,M)=0$ ([[thm-first-whitehead-lemma]], [[thm-second-whitehead-lemma]]).

## Counterexample

**Proof technique:** compute $H^0$ and $H^1$ directly for the abelian nilradical.

1.1 In degree zero, $C^0(\mathfrak n^+,\mathbb C)=\mathbb C$ and $(d^0a)(x)=x\cdot a=0$ for every $x\in\mathfrak n^+$ and $a\in\mathbb C$ by [L1]; hence $d^0=0$ and $H^0(\mathfrak n^+,\mathbb C)=\mathbb C$. [L1, L2]

2.1 In degree one, $C^1(\mathfrak n^+,\mathbb C)=(\mathfrak n^+)^*$ and for every $1$-cochain $\omega$ and $x,y\in\mathfrak n^+$ one has $(d\omega)(x,y)=x\cdot\omega(y)-y\cdot\omega(x)-\omega([x,y])=0$ by [L1]; moreover $C^2(\mathfrak n^+,\mathbb C)=\Lambda^2(\mathfrak n^+)^*=0$ because $\mathfrak n^+$ is one dimensional. Hence every $1$-cochain is a cocycle, while $\operatorname{im}d^0=0$ by step 1.1, so $H^1(\mathfrak n^+,\mathbb C)=(\mathfrak n^+)^*\cong\mathbb C\neq0$. [L1, L2, step 1.1]

3.1 The algebra $\mathfrak n^+$ is nilpotent and $\mathbb C$ is finite dimensional, yet $H^1(\mathfrak n^+,\mathbb C)\neq0$; the vanishing statements [L3] have the semisimplicity of the coefficient algebra $\mathfrak g$ among their hypotheses, which $\mathfrak n^+$ fails, so they cannot be applied here. Under the inherited choice hypotheses of the Kostant example, the same group appears as the $\lambda=0$ case of Kostant's theorem in [[ex-kostant-n-cohomology-for-sl2]], where $H^1(\mathfrak n^+,\mathbb C)=\mathbb C_{s\cdot0}=\mathbb C_{-\alpha}$. [L3, step 2.1] ∎ 