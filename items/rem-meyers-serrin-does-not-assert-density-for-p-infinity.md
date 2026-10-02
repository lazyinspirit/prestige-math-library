---
id: rem-meyers-serrin-does-not-assert-density-for-p-infinity
kind: remark
title: Meyers–Serrin excludes the W^{k,∞} norm endpoint
status: draft
origin: pipeline
deps: [thm-local-smooth-approximation-in-wkp, thm-meyers-serrin-density-on-an-arbitrary-open-set, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, lem-classical-derivatives-are-weak-derivatives, def-sobolev-space-wkp-and-its-norm]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Remark 1.22(2)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.5, Remark 1.22, printed pp. 20–21
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Corollary 3.13
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, Corollary 3.13, printed p. 62
---

## Remark

The local mollification theorem
[[thm-local-smooth-approximation-in-wkp]] and the Meyers–Serrin density
theorem [[thm-meyers-serrin-density-on-an-arbitrary-open-set]] both require
$1\le p<\infty$; neither asserts that smooth functions are dense in
$W^{k,\infty}(\Omega)$ in the Sobolev norm. The exclusion is not a defect of
the proofs but a genuine endpoint failure, and the one-dimensional example
$u(x)=|x|$ on $(-1,1)$ exhibits it.

First, $u\in W^{1,\infty}(-1,1)$ with weak derivative the sign function
$\operatorname{sgn}(x)=1_{(0,1)}-1_{(-1,0)}$. Indeed $x\mapsto x$ is smooth
with classical derivative $1$, which is its weak derivative by
[[lem-classical-derivatives-are-weak-derivatives]], so the truncation calculus
[[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]] applied with
$p=\infty$ gives $|x|\in W^{1,\infty}(-1,1)$ and
$D|x|=\operatorname{sgn}(x)\cdot1$ almost everywhere; the norm of
[[def-sobolev-space-wkp-and-its-norm]] then computes
$\||x|\|_{W^{1,\infty}(-1,1)}=\max\{1,1\}=1$.

Second, no sequence of smooth functions converges to $|x|$ in
$W^{1,\infty}(-1,1)$-norm, hence the finite-$p$ conclusion cannot be extended
to $p=\infty$. Suppose $g_m\in C^\infty(-1,1)$ satisfied
$\|g_m-|x|\|_{W^{1,\infty}}<1/(2m)$ or merely
$\|g_m'- \operatorname{sgn}\|_{L^\infty(-1,1)}<1/2$ for some $m$. On $(0,1)$
the sign equals $1$, so $g_m'>1/2$ almost everywhere there; since $g_m'$ is
continuous, $g_m'\ge1/2$ at every point of $(0,1)$, for otherwise continuity
would give a whole interval on which $g_m'<1/2$, a set of positive measure
contradicting the essential bound. Applying the same reasoning on $(-1,0)$,
where the sign equals $-1$, gives $g_m'\le-1/2$ on $(-1,0)$. Continuity of
$g_m'$ at $0$ then forces the two incompatible limits
$g_m'(0)=\lim_{x\to0^+}g_m'(x)\ge1/2$ and
$g_m'(0)=\lim_{x\to0^-}g_m'(x)\le-1/2$, a contradiction.

The same phenomenon separates the exponents for local approximation: the
mollifications of $|x|$ converge to $|x|$ in $W^{1,q}_{\mathrm{loc}}(-1,1)$
for every finite $q$ by [[thm-local-smooth-approximation-in-wkp]], while the
derivative error at the corner stays of size at least one half in $L^\infty$
for every mollification scale. Local convergence in every finite $W^{1,q}$
therefore does not imply convergence at the $W^{1,\infty}$ endpoint norm; the
companion examples page computes the mollifications of $|x|$ explicitly.
