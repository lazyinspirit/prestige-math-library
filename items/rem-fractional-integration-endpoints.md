---
id: rem-fractional-integration-endpoints
kind: remark
title: "Endpoint bounds require separate formulations"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-riesz-potential-of-order-alpha, thm-hardy-littlewood-sobolev-fractional-integration, def-sublinear-operator-weak-and-strong-type-p-q, def-countable-choice]
proved_here: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Eleonor Harboure, Spaces of Smooth Functions, §1 Theorems 3–4 and following remark, printed pp. 5–8"
      url: "https://congreso.us.es/cidama/activos/cursos/EHarbourefull.pdf"
external_dependency:
  source_url: "https://congreso.us.es/cidama/activos/cursos/EHarbourefull.pdf"
  exact_statement: "Theorem 3: Let $0<\\alpha<n$. The operator $I_\\alpha$ is of weak type $(1,n/(n-\\alpha))$ but not of strong type. Theorem 4: Let $f\\in L^{n/\\alpha}$ and having compact support. Then $I_\\alpha f$ is finite almost everywhere and $\\|I_\\alpha f\\|_*\\le C\\|f\\|_{n/\\alpha}$, where $\\|\\cdot\\|_*$ is the mean-oscillation seminorm modulo constants. Following remark, printed pp. 7–8: for compactly supported critical data, the kernel subtraction gives $\\tilde I_\\alpha f=I_\\alpha f-C$, where $C=\\int_{|y|\\ge1}|y|^{\\alpha-n}f(y)\\,dy$ is finite, so both give the same BMO class. For general $f\\in L^{n/\\alpha}$ the combined kernel-difference integral defines $\\tilde I_\\alpha f$, finite almost everywhere and locally integrable. The same mean-oscillation estimate applies to this renormalized potential; no finite raw potential or finite subtraction constant is asserted without absolute convergence of C."
  local_proof_attempt: "The local near/far argument of this pair requires the strong $L^p$ boundedness of the centered maximal operator, which fails at $p=1$ where only weak $(1,1)$ is available, and its far-region Hölder integral is logarithmically divergent at $p=n/\\alpha$ because $(n-\\alpha)p'=n$ there. The separate weak-type and mean-oscillation arguments of Harboure §1 are recorded but are not reconstructed or consumed in this pair."
  necessity: "Documents the exact boundary of the strong Hardy–Littlewood–Sobolev theorem: it prevents either endpoint from being substituted into the strict-range theorem, and no item of this pair may cite this remark as a proof supplier."
---

## Statement

Assume the Axiom of Countable Choice for the Lebesgue conventions of
[[def-riesz-potential-of-order-alpha]]. **Recorded orientation, not proved
here.** Let $0<\alpha<n$, let $I_\alpha$ be the unit-normalized Riesz potential
on $\mathbb R^n$ of [[def-riesz-potential-of-order-alpha]], and let the
strict-range theorem of this pair be
[[thm-hardy-littlewood-sobolev-fractional-integration]], whose hypothesis is
$1<p<n/\alpha$. In the notation of
[[def-sublinear-operator-weak-and-strong-type-p-q]], the following endpoint
claims are recorded from the cited source but are not proved, used, or
reproduced in this library:

1. **Lower endpoint.** $I_\alpha$ is of weak type $\bigl(1,n/(n-\alpha)\bigr)$,
   and it is *not* of strong type $\bigl(1,n/(n-\alpha)\bigr)$. Consequently the
   hypothesis $1<p$ of the strong theorem cannot be relaxed to $p=1$: no
   constant bounds $\|I_\alpha f\|_{n/(n-\alpha)}$ by $\|f\|_1$.
2. **Upper endpoint.** At $p=n/\alpha$ the raw potential is not of strong type
   $(n/\alpha,\infty)$: there are $f\in L^{n/\alpha}(\mathbb R^n)$ for which
   $I_\alpha f$ is not essentially bounded (indeed it may fail to be finite on a
   set of positive measure).
3. **Critical mean oscillation.** For $f\in L^{n/\alpha}(\mathbb R^n)$ with
   compact support, the potential $I_\alpha f$ is finite almost everywhere and
   its mean-oscillation seminorm modulo additive constants is bounded by
   $C\|f\|_{n/\alpha}$. For general $f\in L^{n/\alpha}(\mathbb R^n)$ use the
   renormalized potential
   $$\widetilde I_\alpha f(x):=\int_{\mathbb R^n}\bigl[K_\alpha(x-y)-1_{\{|y|\ge1\}}K_\alpha(-y)\bigr]f(y)\,dy,$$
   with subtraction inside the integral. It is finite almost everywhere and
   locally integrable, and satisfies the same mean-oscillation bound. If
   $$C_f:=\int_{|y|\ge1}K_\alpha(-y)f(y)\,dy$$
   is absolutely convergent, as it is for compactly supported critical data,
   then $\widetilde I_\alpha f=I_\alpha f-C_f$ wherever the raw potential is
   defined. In general the raw integral may diverge everywhere, so no finite
   additive constant relating it to the renormalized potential is asserted.

## Recorded orientation

These are orientation facts about the boundary of the strict-range theorem,
recorded with their exact hypotheses and **not** established here. The library
does not currently define the weak $L^q$ space or the space $BMO$ of functions
of bounded mean oscillation, so clauses 1 and 3 are quoted from the source in
the source's own vocabulary; clause 1's weak-type inequality is the $p=1$ case
of the weak $(p,q)$ estimate stated in the proof of the source's Theorem 1, and
clause 3 is the source's Theorem 4 together with the remark that follows it.
None of these endpoint claims is a proof supplier for this pair: the strict
range $1<p<n/\alpha$ retains the hypothesis of
[[thm-hardy-littlewood-sobolev-fractional-integration]], and no item of the
pair lists this remark among its dependencies. The companion page's two
counterexamples exhibit the failures of clause 2 and of the strong part of
clause 1 directly, in $L^{p_0}$ and $L^1$ respectively, without proving the
weak-type or mean-oscillation bounds recorded above.
