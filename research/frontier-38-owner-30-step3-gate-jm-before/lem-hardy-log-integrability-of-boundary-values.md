---
id: lem-hardy-log-integrability-of-boundary-values
kind: lemma
title: "Log-integrability of the boundary values of a Hardy function"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-analytic-hardy-space-disc, lem-hardy-radial-means-are-monotone, thm-fatou-boundary-theorem-analytic-hardy-spaces, thm-riesz-factorization-hardy-space, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, thm-mean-value-property-for-plane-harmonic-functions, def-mean-value-property-for-plane-functions, thm-fatou-lemma, thm-dominated-convergence, thm-holomorphic-primitive-on-star-shaped-domain, def-complex-exponential, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-the-one-dimensional-torus-and-normalized-haar-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.7"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The boundary uniqueness theorem, Corollary 5.14, printed pp. 34-35: $\\log|g|\\in L^1$ for $g\\in H^1$ and the positive-measure vanishing criterion."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §4-§5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 62-66: $\\log|f^*|\\in L^1$ for $f\\in H^p$, via the zero-free factor and its root."
---

## Statement

Let $0<p\le\infty$ and $f\in H^p(\mathbb D)$ with $f\not\equiv0$, with boundary
function $f^*$ as in [[thm-fatou-boundary-theorem-analytic-hardy-spaces]]. Then
$\log|f^*|\in L^1(\mathbb T,m)$; equivalently
$\int_{\mathbb T}\log|f^*|\,dm>-\infty$. In particular $f^*\ne0$ $m$-almost
everywhere, and if $f^*=0$ on a set of positive $m$-measure then $f\equiv0$.

## Facts & Assumptions

**Given:** An exponent $0<p\le\infty$ and a nonzero $f\in H^p(\mathbb D)$; in the zero-free case the factorization $f=Bg$ with $B$ the Blaschke product, $g$ zero-free, and an integer $m\ge1$ with $mp>1$.

[L1] Fatou's boundary theorem: $f$ has nontangential limits $f^*$ $m$-almost everywhere, and for $p<\infty$ one has $f_r\to f^*$ in $L^p$ and $\|f^*\|_p=\|f\|_{H^p}$ ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]]).

[L2] Riesz factorization: for $0<p<\infty$ and $f\not\equiv0$ one has $f=Bg$ with $g$ zero-free, $g\in H^p$, $\|g\|_{H^p}=\|f\|_{H^p}$, and $|B|\le1$; the Blaschke product has $|B^*|=1$ $m$-almost everywhere ([[thm-riesz-factorization-hardy-space]], [[def-blaschke-product]], [[thm-blaschke-product-boundary-values-and-zeros]]).

[L3] The classes are nested: $H^\infty(\mathbb D)\subseteq H^q(\mathbb D)\subseteq H^p(\mathbb D)$ for $0<p<q\le\infty$ with norm comparison, and $H^p\subseteq h^p$ ([[lem-hardy-radial-means-are-monotone]], [[def-analytic-hardy-space-disc]]).

[L4] A zero-free holomorphic function $G$ on the star-shaped disc has a holomorphic $m$-th root $G$ with $G^m=g$ (via a primitive of $g'/g$ and the exponential); $\log|G|$ is harmonic, so the mean value property gives $\int_{\mathbb T}\log|G(r\zeta)|\,dm(\zeta)=\log|G(0)|$ for every $r$, and $\log|g_r|=m\log|G_r|$ ([[thm-holomorphic-primitive-on-star-shaped-domain]], [[def-complex-exponential]], [[thm-mean-value-property-for-plane-harmonic-functions]], [[def-mean-value-property-for-plane-functions]]).

[L5] Fatou's lemma, and dominated convergence for a.e. convergent sequences dominated by an integrable function; a nonnegative integrable function with integral $0$ vanishes a.e. ([[thm-fatou-lemma]], [[thm-dominated-convergence]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L6] For a.e. convergent sequence with $\sup_r\int u_r\,dm<+\infty$ one has $\int\liminf_r u_r\,dm\le\liminf_r\int u_r\,dm$; on a probability space $\log^+|z|\le|z|^p/p$ for $p>0$; and $|a^p-b^p|\le|a-b|^p$ for $0<p\le1$, while for $p\ge1$ the difference is controlled by Hölder, so from $g_r\to g^*$ in $L^p$ one gets $|g_r|^p\to|g^*|^p$ in $L^1$ ([[thm-fatou-lemma]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-analytic-hardy-space-disc]]).



## Proof

**Proof technique:** direct.

1.1 Reduction to a zero-free $H^p$ function, $p<\infty$. If $p=\infty$ then $f\in H^\infty\subseteq H^1$ by [L3], so it suffices to prove the assertion for finite $p$; assume henceforth $0<p<\infty$. If $f$ is zero-free, take $g=f$; otherwise write $f=Bg$ by [L2], with $g$ zero-free and $g\in H^p$. By [L1] and [L2], $f^*=B^*g^*$ $m$-almost everywhere and $|B^*|=1$ a.e., so $|f^*|=|g^*|$ a.e.; it therefore suffices to show $\log|g^*|\in L^1(\mathbb T,m)$ for the zero-free $g\in H^p$. [given, L1, L2, L3]

2.1 The mean of $\log|g_r|$ is constant. Choose an integer $m\ge1$ with $mp>1$ (for instance $m=1$ when $p>1$) and let $G$ be a holomorphic $m$-th root of $g$ as in [L4]; then $G$ is zero-free, $G^m=g$, and $$\int_{\mathbb T}\log|g(r\zeta)|\,dm(\zeta)=m\int_{\mathbb T}\log|G(r\zeta)|\,dm(\zeta)=m\log|G(0)|=:c$$ for every $0<r<1$, with $c\in\mathbb R$ because $G(0)\ne0$. [step 1.1, L4, algebra]

3.1 Log-integrability of $g^*$. By [L1] applied to $g\in H^p$, one has $g_r\to g^*$ $m$-almost everywhere and in $L^p$, hence $|g_r|^p\to|g^*|^p$ in $L^1$ by [L6]; consequently the sequence $\log^+|g_r|$ converges a.e. to $\log^+|g^*|$ and is uniformly integrable (it is dominated by $|g_r|^p/p$, an $L^1$-convergent family), so $\int_{\mathbb T}\log^+|g_r|\,dm\to\int_{\mathbb T}\log^+|g^*|\,dm$ by [L5]. Fatou's lemma applied to the nonnegative functions $\log^-|g_r|$ (whose a.e. limit is $\log^-|g^*|$) gives $$\int_{\mathbb T}\log^-\!|g^*|\,dm\le\liminf_{r\uparrow1}\int_{\mathbb T}\log^-\!|g_r|\,dm=\lim_{r\uparrow1}\Bigl(\int_{\mathbb T}\log^+|g_r|\,dm-c\Bigr)=\int_{\mathbb T}\log^+|g^*|\,dm-c,$$ using the constant mean identity of step 2.1. Therefore $\int_{\mathbb T}\log|g^*|\,dm=\int\log^+|g^*|\,dm-\int\log^-|g^*|\,dm\ge c>-\infty$ and $\int\log^-|g^*|\le\int\log^+|g^*|-c<+\infty$, so $\log|g^*|\in L^1(\mathbb T,m)$. [step 2.1, L1, L5, L6, algebra]

4.1 Conclusion for $f$. By step 1.1, $|f^*|=|g^*|$ a.e., so $\log|f^*|=\log|g^*|\in L^1(\mathbb T,m)$; equivalently $\int\log|f^*|\,dm\ge c>-\infty$. If $f^*=0$ on a set $E$ of positive $m$-measure, then $\log|f^*|=-\infty$ on $E$, so $\log|f^*|$ is not an $L^1$ function unless $f\equiv0$, which is excluded; hence $f^*\ne0$ a.e., and if $f^*$ vanished on a positive-measure set the only possibility is $f\equiv0$. [step 1.1, step 3.1, L5, algebra] ∎
