---
id: prop-nrqm-bell-local-representations-are-no-signalling
aliases: [nrqm-bell-local-representations-are-no-signalling]
kind: proposition
domain: mathematics
title: "Local-response representability implies setting-independent marginals"
status: draft
origin: session
dependency_level: 2
deps: [def-nrqm-bell-binary-correlation-models, def-nrqm-bell-local-response-representation, cor-expectation-linearity-monotonicity-and-modulus-bound, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-finite-sum]
dependency_roles:
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  def-finite-sum: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II, PDF page 3: a marginal p(a|x) = sum over b of p(ab|xy) is independent of the distant setting y, and this is identified with the no-signalling property of the local decomposition"
      url: "https://arxiv.org/pdf/1303.2849"
verification:
  precheck: pass
---

## Statement

Let $\mu$ be a binary correlation model on finite setting sets $I,J$ with
outcome labels $\Sigma=\{-1,+1\}$
([[def-nrqm-bell-binary-correlation-models]]), and suppose that $\mu$ admits a
local-response representation with response laws $(\alpha_{i})$, $(\beta_{j})$
and probability space $(\Lambda,\Sigma_{\Lambda},\mathbb P)$
([[def-nrqm-bell-local-response-representation]]). Then:

(a) for every $i\in I$ the marginal law of the first station satisfies
$$\mu^{A}_{ij}=\mu^{A}_{ij'}\qquad\text{for all }j,j'\in J,$$
and for every $j\in J$ the marginal law of the second station satisfies
$\mu^{B}_{ij}=\mu^{B}_{i'j}$ for all $i,i'\in I$; that is, $\mu$ is
no-signalling;

(b) consequently, if a binary correlation model is not no-signalling, then it
admits no local-response representation.

No physical assumption and no choice principle is used; the proposition is a
statement about the tables and their representation.

## Facts & Assumptions

**Given:** A binary correlation model $\mu$; a local-response representation $(\alpha_{i})_{i\in I}$, $(\beta_{j})_{j\in J}$ on $(\Lambda,\Sigma_{\Lambda},\mathbb P)$; setting labels $i\in I$, $j,j'\in J$; outcome labels $\varepsilon,\delta\in\Sigma$.

[F1] The joint laws and marginals are the finite sums $\mu^{A}_{ij}(\varepsilon)=\sum_{\delta\in\Sigma}\mu_{ij}(\varepsilon,\delta)$ and $\mu^{B}_{ij}(\delta)=\sum_{\varepsilon\in\Sigma}\mu_{ij}(\varepsilon,\delta)$, and no-signalling means exactly the pair of setting-independence identities of clause (c) of [[def-nrqm-bell-binary-correlation-models]]; under the representation hypothesis the joint law is also given by the representation identity $\mu_{ij}(\varepsilon,\delta)=\mathbb E_{\mathbb P}[\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)]$ of clause (a) of [[def-nrqm-bell-local-response-representation]].

[F2] Each $\beta_{j}(\lambda,\cdot)$ is a probability law on the two-point set $\Sigma$: $\sum_{\delta\in\Sigma}\beta_{j}(\lambda,\delta)=1$ for every $\lambda\in\Lambda$ and every $j\in J$ ([[def-nrqm-bell-local-response-representation]] clause (a)).

[F3] Expectation is linear: $\mathbb E[aX+bY]=a\mathbb E[X]+b\mathbb E[Y]$ for integrable real random variables $X,Y$ and scalars $a,b$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]); by induction the identity extends to finite sums $\sum_{\delta\in\Sigma}$ over the two-element set $\Sigma$ ([[def-finite-sum]]).

## Proof

**Proof technique:** direct; sum the representation identity over the distant outcome label, use the normalization of the distant response law and the linearity of expectation, and read off the setting-independence.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Marginal of the first station] Fix $i\in I$, $j\in J$ and $\varepsilon\in\Sigma$. By [F1] and the definition of the marginal, $\mu^{A}_{ij}(\varepsilon)=\sum_{\delta\in\Sigma}\mu_{ij}(\varepsilon,\delta)=\sum_{\delta\in\Sigma}\mathbb E_{\mathbb P}[\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)]=\mathbb E_{\mathbb P}\bigl[\sum_{\delta\in\Sigma}\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)\bigr]=\mathbb E_{\mathbb P}\bigl[\alpha_{i}(\cdot,\varepsilon)\sum_{\delta\in\Sigma}\beta_{j}(\cdot,\delta)\bigr]=\mathbb E_{\mathbb P}[\alpha_{i}(\cdot,\varepsilon)]$, where the second equality is the representation identity, the third is the finite linearity of [F3], and the last is the normalization of [F2]. The resulting expression involves $i$ and $\varepsilon$ only, so $\mu^{A}_{ij}(\varepsilon)=\mu^{A}_{ij'}(\varepsilon)$ for every $j'\in J$; as $(\varepsilon,i,j)$ were arbitrary this is the first-station half of (a). [given, F1, F2, F3, algebra]

1.2 [Marginal of the second station] The same computation with the roles of the two stations exchanged, summing this time over $\varepsilon\in\Sigma$ and using the normalization $\sum_{\varepsilon}\alpha_{i}(\lambda,\varepsilon)=1$ of [F2], gives $\mu^{B}_{ij}(\delta)=\sum_{\varepsilon}\mu_{ij}(\varepsilon,\delta)=\mathbb E_{\mathbb P}[\beta_{j}(\cdot,\delta)]$ for every $\delta\in\Sigma$, an expression free of $i$; hence $\mu^{B}_{ij}=\mu^{B}_{i'j}$ for all $i,i'\in I$, the second-station half of (a). [given, F1, F2, F3, algebra]

2.1 [Assembly and contrapositive] Steps 1.1 and 1.2 give the two setting-independence identities, which by [F1] is exactly no-signalling of $\mu$; this is (a). For (b), if a model admits a local-response representation then (a) makes it no-signalling, so a model that is not no-signalling admits none. [step 1.1, step 1.2, F1] ∎

## Remarks

- **Direction of the implication.** Representability is a strictly stronger
  requirement than no-signalling: this proposition gives only the implication
  from representability to no-signalling. The converse fails, and the
  framework's singlet arrangement is an explicit failing case once its four
  tables violate the CHSH bound of the next item.
- **Reading.** The two identities are the statement that each station's
  outcome law is unaffected by the distant setting in the model. This is a
  property of the declared tables; it is not a statement about any laboratory
  procedure and it assumes no spatial or temporal structure.
