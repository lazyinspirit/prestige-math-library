---
id: ex-boundary-vanishing-and-uniqueness
kind: example
title: "Boundary vanishing of a nonzero Hardy function is confined to a null set"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-fatou-boundary-theorem-analytic-hardy-spaces, lem-hardy-log-integrability-of-boundary-values, def-analytic-hardy-space-disc, thm-cauchy-integral-formula-circle, ex-outer-function-with-prescribed-boundary-modulus, lem-outer-function-properties, def-inner-singular-inner-and-outer-functions, def-the-one-dimensional-torus-and-normalized-haar-integral, def-complex-exponential, lem-hardy-radial-means-are-monotone, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.7"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The boundary uniqueness theorem, Corollary 5.14, printed pp. 34-35: $\\log|g|\\in L^1$ for $g\\in H^1$ and the positive-measure vanishing criterion."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §4-§6"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 63-64 and 71: $(1-z)$ as the elementary outer-function example and the boundary-uniqueness discussion."
---

## Example

(a) The function $f(z)=1-z$ lies in $H^\infty(\mathbb D)$; its boundary function
$f^*(\zeta)=1-\zeta$ vanishes exactly at $\zeta=1$, a set of $m$-measure zero,
and $f\not\equiv0$. Thus a nonzero Hardy function may vanish at boundary
points, although by (b) its boundary vanishing set must be null.

(b) If $f\in H^p(\mathbb D)$ for some $0<p\le\infty$ and the zero set
$\{f^*=0\}$ has positive $m$-measure, then $f\equiv0$.

(c) (Uniqueness) If $f,g\in H^p(\mathbb D)$ have $f^*=g^*$ $m$-almost
everywhere, then $f=g$.

(d) The function $f(z)=1-z$ is itself outer: it has no zeros in $\mathbb D$,
its canonical factorization is $1-z=B\,S_\mu\,F$ with $B=1$, $S_\mu=1$ and
$F=1-z$, and indeed $1-z=[\,|1-\zeta|\,]$.

## Facts & Assumptions

**Given:** The functions $f(z)=1-z$ and, where asserted, functions $f,g\in H^p(\mathbb D)$. The countable-choice regime of [[def-analytic-hardy-space-disc]] and [[def-inner-singular-inner-and-outer-functions]] is in force ([[def-countable-choice]]).

[F1] Fatou's boundary theorem for analytic $H^p$ and the log-integrability lemma: for $f\in H^p$, $f\not\equiv0$, the boundary function $f^*$ exists a.e. and $\log|f^*|\in L^1(\mathbb T,m)$, so $f^*\ne0$ $m$-almost everywhere; if $f^*=0$ on a set of positive measure then $f\equiv0$ ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]], [[lem-hardy-log-integrability-of-boundary-values]], [[def-analytic-hardy-space-disc]]).

[F2] $H^p(\mathbb D)\subseteq H^{p'}(\mathbb D)$ for $0<p'<p\le\infty$ with norm comparison, so sums of $H^p$ functions lie in $H^{\min(p,q)}$; in particular $H^\infty\subseteq H^p$ for every $p$ ([[lem-hardy-radial-means-are-monotone]], [[def-analytic-hardy-space-disc]]).

[F3] The computation of the preceding example: for $h=|\ 1-\zeta\ |$ one has $[h](z)=1-z$, $\log|1-z|=P[\log|1-\zeta|](z)$, and $[h]$ is outer with $[h](0)=1$ ([[ex-outer-function-with-prescribed-boundary-modulus]], [[lem-outer-function-properties]]).

[F4] A holomorphic $f$ is outer exactly when $f=e^{i\gamma}[\,|f^*|\,]$ for some $\gamma$, equivalently when $\log|f|=P[\log|f^*|]$; the canonical factorization of an outer function has trivial Blaschke and singular factors ([[def-inner-singular-inner-and-outer-functions]], [[lem-outer-function-properties]]).

[F5] The point $\{1\}\subseteq\mathbb T$ is $m$-null and $\zeta\mapsto1-\zeta$ is continuous with $1-\zeta=0$ exactly at $\zeta=1$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-complex-exponential]]).

## Verification

1.1 Part (a). The function $f(z)=1-z$ is a polynomial, hence holomorphic, with $|f|\le2$ on $\mathbb D$, so $f\in H^\infty(\mathbb D)$; it is not identically zero. Its radial limits are $f^*(\zeta)=1-\zeta$, continuous on $\mathbb T$ and vanishing exactly at $\zeta=1$ by [F5], a set of measure zero. [given, F2, F5, algebra]

1.2 Part (b). Let $f\in H^p$ with $\{f^*=0\}$ of positive measure. If $f\not\equiv0$, then [F1] gives $\log|f^*|\in L^1$, so $f^*\ne0$ $m$-almost everywhere, contradicting positive measure of the zero set; hence $f\equiv0$. [given, F1]

2.1 Part (c). Let $f,g\in H^p$ with $f^*=g^*$ a.e. By [F2], the difference $f-g$ lies in $H^{p'}$ for some $0<p'\le\infty$ (take $p'=p$); its boundary function $(f-g)^*=f^*-g^*$ vanishes a.e., a set of full measure. If $f-g\not\equiv0$, then by step 1.2 applied to $f-g$ its zero set would have to be null, contradicting that it has full measure; hence $f=g$. [step 1.2, F2]

2.2 Part (d): $1-z$ is outer. By [F3] and [F4], $1-z=[\,|1-\zeta|\,]$; since $[h](0)=1>0$ and $e^{i\gamma}$ is normalized by the value at the origin, the unimodular constant is $1$. Hence $1-z$ is outer, and its canonical factorization $1-z=\lambda\,B\,S_\mu\,F$ has $B=1$ (no zeros in $\mathbb D$), $S_\mu=1$ (no singular factor for an outer function) and $F=1-z$ with $\lambda=1$. [step 1.1, F3, F4, algebra]

3.1 Assembly. Step 1.1 proves (a), step 1.2 proves (b), step 2.1 proves the uniqueness statement (c), and step 2.2 identifies $1-z$ as the outer function $[\,|1-\zeta|\,]$ with the stated trivial canonical factors, proving (d). [step 1.1, step 1.2, step 2.1, step 2.2] ∎
