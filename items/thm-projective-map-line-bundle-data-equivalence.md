---
id: thm-projective-map-line-bundle-data-equivalence
kind: theorem
title: "Maps to projective space equal generating line-bundle data"
status: published
origin: pipeline
deps:
  - thm-line-bundle-sections-define-projective-map
  - thm-projective-space-as-proj
  - def-axiom-of-choice
  - def-very-ample-invertible-sheaf-relative
  - def-relative-projective-space-standard-charts
  - lem-morphism-schemes-local-on-source-target
  - def-globally-generated-sheaf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice as inherited from the projective-space and sheaf
constructions ([[def-axiom-of-choice]]). Let $S$ be a scheme, $X$ an $S$-scheme
and $n\ge0$. For an $S$-morphism $\varphi:X\to\mathbb P^n_S$ put
$$\varphi\longmapsto\bigl(\varphi^*\mathcal O(1);\ \varphi^*x_0,\dots,\varphi^*x_n\bigr),$$
where $x_0,\dots,x_n\in\Gamma(\mathbb P^n_S,\mathcal O(1))$ are the universal
coordinate sections
([[def-relative-projective-space-standard-charts]],
[[def-very-ample-invertible-sheaf-relative]]). Then this assignment is a
natural bijection between

- the set of $S$-morphisms $\varphi:X\to\mathbb P^n_S$, and
- the set of isomorphism classes of pairs $(L;s_0,\dots,s_n)$ consisting of an
  invertible $\mathcal O_X$-module $L$ together with global sections
  $s_0,\dots,s_n$ which generate $L$
  ([[def-globally-generated-sheaf]]),

where $(L;s_i)\cong(L';s_i')$ means an isomorphism $L\to L'$ carrying $s_i$ to
$s_i'$ for all $i$. Naturality means compatibility with base change $X'\to X$
and with morphisms $S'\to S$. The case $n=0$ is included: both sides are
singletons over each $X$-component, corresponding to the trivial line bundle
with its unit section.

## Facts & Assumptions

**Given:** A scheme $S$, an $S$-scheme $X$, an integer $n\ge0$, the relative projective space $\mathbb P^n_S$ with its standard charts $U_i$, and the Axiom of Choice as inherited.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] The sheaf $\mathcal O(1)$ on $\mathbb P^n_S$ has global sections $x_0,\dots,x_n$, the universal coordinate sections: on the chart $U_i$ with frame $e_i$ one has $x_i|_{U_i}=e_i$ and $x_j|_{U_i}=x^{(i)}_je_i$ for $j\ne i$, and these local sections glue by the transition formulas $e_j=x^{(i)}_je_i$, equivalently $e_i=x^{(j)}_ie_j$; they generate $\mathcal O(1)$ because $x_i$ is a frame on $U_i$. ([[def-relative-projective-space-standard-charts]], [[def-very-ample-invertible-sheaf-relative]])

[F2] (Universal property.) For an $S$-scheme $X$, an invertible $\mathcal O_X$-module $L$ and generating sections $s_0,\dots,s_n\in\Gamma(X,L)$, there is a unique $S$-morphism $\varphi:X\to\mathbb P^n_S$ with $\varphi^*\mathcal O(1)\cong L$ under an isomorphism carrying $\varphi^*x_i$ to $s_i$, and with $\varphi^{-1}(D_+(x_i))=X_{s_i}$; on $X_{s_i}\cap X_{s_j}$ the ratios satisfy $x^{(i)}_j\circ\varphi=s_j/s_i$. ([[thm-line-bundle-sections-define-projective-map]])

[F3] Two $S$-morphisms $X\to\mathbb P^n_S$ agree if they agree on an open cover of $X$, and a morphism is determined by its restrictions. ([[lem-morphism-schemes-local-on-source-target]])

[F4] $\mathbb P^0_S\cong S$ over $S$, with no chart variables. ([[thm-projective-space-as-proj]], [[def-relative-projective-space-standard-charts]])

[F5] Pullback of sections is functorial: for $\varphi:X\to Y$, sections $t\in\Gamma(Y,M)$ and an open $V\subseteq Y$ one has $\varphi^*(t|_V)=(\varphi^*t)|_{\varphi^{-1}(V)}$, and pullback of invertible sheaves is invertible. ([[def-relative-projective-space-standard-charts]])

## Proof

**Proof technique:** direct: pull back the universal data along a morphism, apply the universal property to produce a morphism from data, and verify that the two constructions are inverse by comparing chart ratios and using localness of morphism equality.

1.1 Data attached to a morphism. Let $\varphi:X\to\mathbb P^n_S$ be an $S$-morphism. Then $L_\varphi:=\varphi^*\mathcal O(1)$ is an invertible $\mathcal O_X$-module and the pullbacks $s_i:=\varphi^*x_i\in\Gamma(X,L_\varphi)$, $i=0,\dots,n$, generate $L_\varphi$: on $\varphi^{-1}(U_i)$ the section $s_i$ is the pullback of the frame $x_i|_{U_i}=e_i$, hence a frame there, and the sets $\varphi^{-1}(U_i)$ cover $X$. [F1, F5, algebra]

1.2 The universal property in the reverse direction. Conversely, given an invertible $L$ and generating sections $s_0,\dots,s_n$, [F2] supplies an $S$-morphism $\Phi(L;s):X\to\mathbb P^n_S$ with $\Phi^*x_i$ corresponding to $s_i$ under an isomorphism $\Phi^*\mathcal O(1)\cong L$ and with $\Phi^{-1}(D_+(x_i))=X_{s_i}$. The construction depends only on the isomorphism class of $(L;s_i)$: an isomorphism $\alpha:L\to L'$ with $\alpha(s_i)=s_i'$ transports a trivialisation of $\Phi^*\mathcal O(1)$ by $L$ into one by $L'$. [F2, construct]

1.3 The case $n=0$. Here $\mathbb P^0_S\cong S$ by [F4], so the left side is the singleton $\{$structure morphism $X\to S\}$. On the right side, a pair $(L;s_0)$ with $s_0$ generating $L$ has $s_0$ a global frame: the evaluation map $\mathcal O_X\to L$ is an isomorphism. Mapping $(L;s_0)$ to the isomorphism class of the trivialisation it defines identifies all such pairs with the single class of $(\mathcal O_X;1)$, so both sides are singletons; the unique morphism $X\to\mathbb P^0_S$ corresponds to the unit section of $\mathcal O_X$. [F4, cases: n=0]

2.1 The two constructions are inverse: data-to-morphism-to-data. Start with data $(L;s_0,\dots,s_n)$ and let $\varphi=\Phi(L;s)$. Then the data attached to $\varphi$ in step 1.1 are $(\varphi^*\mathcal O(1);\varphi^*x_0,\dots,\varphi^*x_n)$, which by [F2] is isomorphic to $(L;s_0,\dots,s_n)$ under the very isomorphism used to define $\Phi$; hence the composite data $\mapsto$ morphism $\mapsto$ data is the identity on isomorphism classes. [F2, step 1.1, step 1.2]

2.2 The two constructions are inverse: morphism-to-data-to-morphism. Let $\varphi:X\to\mathbb P^n_S$ be an $S$-morphism and let $(L_\varphi;s_i=\varphi^*x_i)$ be its data as in step 1.1. Let $\psi=\Phi(L_\varphi;s)$ be the morphism supplied by step 1.2. Then $\psi^{-1}(D_+(x_i))=X_{s_i}=\varphi^{-1}(D_+(x_i))$ and on $X_{s_i}$ the chart coordinates agree: $x^{(i)}_j\circ\psi=s_j/s_i=\varphi^*(x_j)/\varphi^*(x_i)=x^{(i)}_j\circ\varphi$ by [F2] and the definitions. Since the open sets $X_{s_i}$ cover $X$, [F3] gives $\psi=\varphi$. [F2, F3, step 1.1, step 1.2]

2.3 Naturality. For a morphism $g:X'\to X$ the data of $\varphi\circ g$ are the pullbacks along $g$ of the data of $\varphi$, and $\Phi$ is compatible with this operation because the universal property [F2] is: the morphism associated to the pulled-back data is $\Phi(L;s)\circ g$, by uniqueness in [F2]. The same uniqueness gives compatibility with base change $S'\to S$. [F2, step 1.1, step 1.2]

3.1 Conclusion. Step 1.1 attaches generating line-bundle data to every morphism, step 1.2 produces a morphism from data, steps 2.1 and 2.2 show the two operations are mutually inverse on isomorphism classes, step 2.3 gives naturality, and step 1.3 covers $n=0$. The Axiom of Choice [A1] is inherited from the projective-space and sheaf constructions; no choice is made here. [A1, step 1.2, step 2.1, step 2.2, step 2.3, step 1.3]
\qed
