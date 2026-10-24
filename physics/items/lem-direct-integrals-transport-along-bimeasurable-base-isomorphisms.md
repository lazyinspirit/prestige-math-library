---
id: lem-direct-integrals-transport-along-bimeasurable-base-isomorphisms
kind: lemma
title: Direct integrals transport along bimeasurable base isomorphisms
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
local_addition: true
proof_strategy: direct
deps:
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-direct-integral-of-a-measurable-hilbert-field
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - def-measurable-and-decomposable-operator-fields
  - thm-composition-with-borel-functions-preserves-measurability
  - def-standard-borel-space
  - def-measurable-space
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. Dixmier, Von Neumann Algebras, Chapter II §1 (direct integrals and measurable fields)"
      url: "https://www.math.ucsd.edu/~nwallach/vonneumann.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Statement

Assume AC. Let $(X,\mathcal B_X,\mu)$ and $(Y,\mathcal B_Y,\nu)$ be
$\sigma$-finite standard Borel measure spaces, let $c:X\to Y$ be a
bimeasurable bijection with $\nu=c_*\mu$, and let $(H_y)_{y\in Y}$ be a
measurable complex Hilbert field over $(Y,\nu)$ with direct integral
$\int_Y^\oplus H_y\,d\nu(y)$. Then $x\mapsto H_{c(x)}$ is a measurable Hilbert
field over $(X,\mu)$ with the pulled-back fundamental family, and pullback of
sections $\xi\mapsto\xi\circ c$ is a unitary
$$c^*:\int_Y^\oplus H_y\,d\nu(y)\longrightarrow\int_X^\oplus H_{c(x)}\,d\mu(x)$$
that intertwines multiplication by $f\in L^\infty(Y,\nu)$ with multiplication
by $f\circ c$. A decomposable operator field $(T_y)$ over $Y$ corresponds to
the decomposable field $x\mapsto T_{c(x)}$ over $X$ with the same essential
norm and the same fibrewise adjoint and product identities.

## Facts & Assumptions

**Given:** AC, $\sigma$-finite standard Borel measure spaces $(X,\mu)$,
$(Y,\nu)$, a bimeasurable bijection $c:X\to Y$ with $\nu=c_*\mu$, and a
measurable Hilbert field $(H_y,e_n(y))_{y\in Y}$ with countable fundamental
family and direct integral $\mathcal H_Y=\int_Y^\oplus H_y\,d\nu(y)$.

[F1] The field datum means exactly: a separable Hilbert space $H_y$ for each $y$, vectors $e_n(y)$ spanning a dense subspace of $H_y$, Borel Gram coefficients $y\mapsto\langle e_n(y),e_m(y)\rangle$; a section is measurable when all coefficients $y\mapsto\langle\xi(y),e_n(y)\rangle$ are Borel, and sections are identified when they agree off a Borel null set ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F2] $\mathcal H_Y$ is the quotient of the square-integrable measurable sections by almost-everywhere agreement, with inner product $\langle[\xi],[\eta]\rangle=\int_Y\langle\xi(y),\eta(y)\rangle\,d\nu(y)$, and it is a Hilbert space ([[def-direct-integral-of-a-measurable-hilbert-field]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F3] For a section, coefficient measurability is equivalent to measurability of all pairings with measurable sections; such sections are closed under measurable scalar combinations and pointwise norm limits, and $y\mapsto\|\xi(y)\|$ is measurable ([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F4] Precomposition with the Borel maps $c$ and $c^{-1}$ preserves Borel measurability ([[thm-composition-with-borel-functions-preserves-measurability]], [[def-standard-borel-space]], [[def-measurable-space]]).

[F5] An operator field $(T_y)$ is weakly measurable when its fundamental matrix coefficients are Borel; it is essentially bounded when $\operatorname{ess\,sup}_y\|T_y\|<\infty$, and a bounded operator on $\mathcal H_Y$ is decomposable when it acts by such a field, $S[\xi]=[T\xi]$ ([[def-measurable-and-decomposable-operator-fields]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the base spaces and the field of the statement, with fundamental family $(e_n)$ over $Y$.

1.1 Define $e_n^c(x):=e_n(c(x))$ in $H_{c(x)}$. The Gram coefficients $x\mapsto\langle e_n^c(x),e_m^c(x)\rangle_{H_{c(x)}}=(\langle e_n,e_m\rangle_{H_\bullet})\circ c(x)$ are Borel by [F1] and [F4], and for each $x$ the span of $\{e_n^c(x)\}$ equals the span of $\{e_n(c(x))\}$, which is dense in $H_{c(x)}$; hence $x\mapsto H_{c(x)}$ with this pulled-back family is a measurable Hilbert field with countable fundamental family over $(X,\mu)$. [F1, F4]

2.1 A section $\xi$ over $Y$ has Borel coefficients $\langle\xi,e_n\rangle$ if and only if the section $\xi\circ c$ over $X$ has Borel coefficients $\langle\xi\circ c,e_n^c\rangle=(\langle\xi,e_n\rangle)\circ c$: one direction is [F4], and the converse applies [F4] to $c^{-1}$, which is bimeasurable; by [F3] the same equivalence holds for all pairings, and $\|\xi\circ c\|=\|\xi\|\circ c$ is measurable whenever $\xi$ is. [step 1.1, F3, F4]

3.1 Change of variables: for every nonnegative Borel function $h$ on $Y$, $\int_Xh(c(x))\,d\mu(x)=\int_Yh\,d\nu$, because $\nu=c_*\mu$ is the pushforward; consequently for a measurable section $\xi$ one has $\int_X\|\xi(c(x))\|_{H_{c(x)}}^2\,d\mu(x)=\int_Y\|\xi(y)\|_{H_y}^2\,d\nu(y)$, so $\xi\circ c$ is square-integrable exactly when $\xi$ is. [step 1.1, step 2.1, F1]

4.1 Define $c^*[\xi]:=[\xi\circ c]$ on the direct integral. It is well defined on classes: if $\xi=\eta$ outside a Borel $\nu$-null set $N$, then $\xi\circ c=\eta\circ c$ outside $c^{-1}(N)$, and $\mu(c^{-1}(N))=\nu(N)=0$; it is complex-linear because the fibre operations are pointwise and pullback is linear; and it preserves inner products, $\langle c^*[\xi],c^*[\eta]\rangle=\int_X\langle\xi(c(x)),\eta(c(x))\rangle\,d\mu(x)=\int_Y\langle\xi(y),\eta(y)\rangle\,d\nu(y)=\langle[\xi],[\eta]\rangle$, by [step 3.1]. It is surjective: for a measurable square-integrable section $\eta$ over $X$, the section $\xi:=\eta\circ c^{-1}$ is measurable over $Y$ by [step 2.1] applied to $c^{-1}$ and has $\xi\circ c=\eta$ and the same integral by [step 3.1]. Hence $c^*$ is a complex-linear surjective isometry between the two direct integrals, that is, a unitary. [step 2.1, step 3.1, F2]

4.2 A weakly measurable, essentially bounded operator field $(T_y)$ over $Y$ pulls back to the operator field $x\mapsto T_{c(x)}$ on the fibres $H_{c(x)}$: its fundamental matrix coefficients are $(\langle T_\bullet e_n,e_m\rangle)\circ c$, Borel by [F4], so the pulled field is weakly measurable, and $\{x:\|T_{c(x)}\|>t\}=c^{-1}(\{y:\|T_y\|>t\})$ has $\mu$-measure $\nu(\{y:\|T_y\|>t\})$, so the two operator-norm functions have the same essential supremum; moreover, for a square-integrable section $\xi$ over $Y$, the pulled section $T_{c(\cdot)}\xi(c(\cdot))=(T\xi)\circ c$ is the pullback of the square-integrable section $T\xi$, so the decomposable action is transported. Fibrewise adjoint and product identities are preserved because for each $x$ the fibre operator is $T_{c(x)}$ itself, $(T_{c(x)})^*=(T^*)_{c(x)}$ and $S_{c(x)}T_{c(x)}=(ST)_{c(x)}$. [F5, step 1.1, step 2.1, step 3.1]

5.1 Finally $c^*$ intertwines multiplication: for $f\in L^\infty(Y,\nu)$ and a square-integrable section $\xi$, $c^*(M_f[\xi])=[f\,\xi\circ c]=[(f\circ c)(\xi\circ c)]=M_{f\circ c}(c^*[\xi])$ pointwise. Together with [step 4.1] and [step 4.2] this proves that $x\mapsto H_{c(x)}$ is a measurable field, that $c^*$ is a unitary intertwining the two multiplication algebras, and that decomposable fields transport with the same essential norm and fibrewise algebraic identities. [step 4.1, step 4.2, F2, algebra] ∎ 