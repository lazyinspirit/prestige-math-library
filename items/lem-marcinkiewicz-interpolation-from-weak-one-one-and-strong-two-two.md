---
id: lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two
kind: lemma
title: "Marcinkiewicz interpolation from weak (1,1) and strong (2,2)"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-distribution-function-of-absolute-value, def-l-p-space-as-a-quotient-by-null-functions, def-sublinear-operator-weak-and-strong-type-p-q, thm-chebyshev-markov-inequality-for-the-integral, thm-layer-cake-formula-for-l-p-powers, thm-tonelli-theorem-for-sigma-finite-product-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-5.md"
      - "research/frontier-38-owner-30-alpha-batch-5-5a.md"
      - "research/frontier-38-owner-30-step5-hash-5-post-5a.json"
    content_sha256: "81225ec469564836c5bc99413206910d368790a4d5bd2922096815e2b7f440c6"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juha Kinnunen, Harmonic Analysis"
      url: "https://math.aalto.fi/~jkkinnunen/files/harmonic_analysis.pdf"
      locator: "Chapter 2, Theorem 2.4 and its proof, printed pp. 27–29"
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 1.3.2 and its proof, printed pp. 33–36"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a $\sigma$-finite measure space, let $1<p<2$, and let
$T$ be a sublinear operator defined on $L^1(X)+L^2(X)$ and taking values in the
measurable functions on $X$, which is of weak type $(1,1)$ with constant $A$ and
of strong type $(2,2)$ with constant $B$. Then every $f\in L^p(X)$ satisfies
$$\|Tf\|_p\le\Bigl[p\Bigl(\frac{2A}{p-1}+\frac{4B^2}{2-p}\Bigr)\Bigr]^{1/p}\|f\|_p,$$
so that $T$ is of strong type $(p,p)$, with the stated constant.

## Facts & Assumptions

**Given:** A $\sigma$-finite measure space $(X,\mathcal A,\mu)$; an exponent $1<p<2$; a sublinear operator $T$ on $L^1(X)+L^2(X)$ with weak $(1,1)$ constant $A$ and strong $(2,2)$ constant $B$; a function $f\in L^p(X)$; a height $t>0$.

[F1] Sublinearity means $|T(af+bg)|\le|a|\,|Tf|+|b|\,|Tg|$; weak type $(1,1)$ with constant $A$ means $\mu(\{|Tg|>s\})\le A\|g\|_1/s$ for all $g\in L^1$ and $s>0$; strong type $(2,2)$ with constant $B$ means $\|Tg\|_2\le B\|g\|_2$ for all $g\in L^2$ ([[def-sublinear-operator-weak-and-strong-type-p-q]]).

[F2] The distribution function of $|g|$ is $A_g(t)=\mu(\{|g|>t\})$ ([[def-distribution-function-of-absolute-value]]), and for measurable $h\ge0$ and $\lambda>0$ one has $\mu(\{h\ge\lambda\})\le\lambda^{-1}\int h\,d\mu$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

[F3] For measurable $g$ and $0<q<\infty$, $\int_X|g|^q\,d\mu=q\int_0^\infty t^{q-1}A_g(t)\,dt$, both sides possibly $+\infty$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[F4] On a product of $\sigma$-finite measure spaces, a nonnegative product-measurable function may be integrated in either order ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] Elements of $L^p(X)$ are a.e. equivalence classes, and $\|\cdot\|_p$ is the quotient norm ([[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fix a representative of $f$ and, for each height $t>0$, split $f=f_1^{(t)}+f_2^{(t)}$ with $f_1^{(t)}:=f\,\mathbf1_{\{|f|>t\}}$ and $f_2^{(t)}:=f\,\mathbf1_{\{|f|\le t\}}$; both are measurable, $\|f_1^{(t)}\|_1=\int_{\{|f|>t\}}|f|\,d\mu\le t^{1-p}\|f\|_p^p<\infty$ and $\|f_2^{(t)}\|_2^2=\int_{\{|f|\le t\}}|f|^2\,d\mu\le t^{2-p}\|f\|_p^p<\infty$, so $f_1^{(t)}\in L^1$, $f_2^{(t)}\in L^2$, and both lie in $L^1+L^2$; moreover $|f_2^{(t)}|\le t$ and $f=f_1^{(t)}+f_2^{(t)}$ pointwise. [F5, given, construct]

2.1 Sublinearity gives $|Tf|\le|Tf_1^{(t)}|+|Tf_2^{(t)}|$ pointwise, hence $\{|Tf|>t\}\subseteq\{|Tf_1^{(t)}|>t/2\}\cup\{|Tf_2^{(t)}|>t/2\}$, and subadditivity of $\mu$ together with [F1] applied to $f_1^{(t)}$ (weak $(1,1)$ at level $t/2$) and to $f_2^{(t)}$ (strong $(2,2)$, then [F2] applied to $|Tf_2^{(t)}|^2$ at level $(t/2)^2$) yields $$A_{Tf}(t)\le\frac{2A}{t}\bigl\|f_1^{(t)}\bigr\|_1+\frac{4B^2}{t^2}\bigl\|f_2^{(t)}\bigr\|_2^2=\frac{2A}{t}\int_{\{|f|>t\}}|f|\,d\mu+\frac{4B^2}{t^2}\int_{\{|f|\le t\}}|f|^2\,d\mu.$$ [F1, F2, step 1.1, algebra]

3.1 Tonelli's theorem applied to the nonnegative product-measurable function $(x,t)\mapsto t^{p-2}|f(x)|\mathbf1_{\{|f(x)|>t\}}$ on the $\sigma$-finite product $X\times(0,\infty)$ converts the first term of the layer-cake integral into an $X$-integral: $$\int_0^\infty t^{p-1}\frac{2A}{t}\Bigl(\int_{\{|f|>t\}}|f|\,d\mu\Bigr)dt=2A\int_X|f|\Bigl(\int_0^{|f|}t^{p-2}\,dt\Bigr)d\mu=\frac{2A}{p-1}\int_X|f|^p\,d\mu,$$ where the inner integral was evaluated as $|f|^{p-1}/(p-1)$, legitimate because $p-1>0$, and the case $f(x)=0$ contributes $0$. [F3, F4, step 2.1, algebra]

3.2 Likewise, Tonelli applied to $(x,t)\mapsto t^{p-3}|f(x)|^2\mathbf1_{\{|f(x)|\le t\}}$ gives, since $p-2<0$, $$\int_0^\infty t^{p-1}\frac{4B^2}{t^2}\Bigl(\int_{\{|f|\le t\}}|f|^2\,d\mu\Bigr)dt=4B^2\int_X|f|^2\Bigl(\int_{|f|}^\infty t^{p-3}\,dt\Bigr)d\mu=\frac{4B^2}{2-p}\int_X|f|^p\,d\mu,$$ the inner integral being $|f|^{p-2}/(2-p)$ and the case $f(x)=0$ contributing $0$. [F3, F4, step 2.1, algebra]

4.1 Combining the layer-cake identity [F3] for $g=Tf$ with step 2.1 and steps 3.1 and 3.2 gives $$\|Tf\|_p^p=p\int_0^\infty t^{p-1}A_{Tf}(t)\,dt\le p\Bigl(\frac{2A}{p-1}+\frac{4B^2}{2-p}\Bigr)\|f\|_p^p,$$ because $t^{p-1}A_{Tf}(t)\le t^{p-1}$ times the two integrands integrated in steps 3.1 and 3.2; taking $p$-th roots gives the asserted strong $(p,p)$ bound. Since $Tf$ is determined a.e. by the class of $f$, the bound descends to $L^p(X)$ by [F5]. [F3, step 2.1, step 3.1, step 3.2, algebra] ∎
