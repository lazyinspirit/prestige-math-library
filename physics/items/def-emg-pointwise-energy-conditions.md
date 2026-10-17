---
id: def-emg-pointwise-energy-conditions
kind: definition
title: Pointwise Maxwell and matter energy-condition vocabulary
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps: [def-emg-lorentzian-forms]
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §4.5.7, equations (4.60)–(4.62), PDF pp. 201–204 (printed pp. 194–197)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "The pointwise WEC, NEC, SEC and DEC inequalities and the perfect-fluid conditions. Tong derives the curvature version of SEC using Einstein's equation; this definition uses the trace-reversed tensor directly and assumes no field equation."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Use the smooth oriented, time-oriented Lorentzian four-manifold, signature $(-,+,+,+)$, metric $g$, and future cone of [[def-emg-lorentzian-forms]]. Here timelike means $g(v,v)<0$, null means $v\ne0$ and $g(v,v)=0$, causal means timelike or null, and a nonzero causal vector is future-directed when $g(v,N)<0$, as in that supplier. A future unit observer is a vector $n$ with $g(n,n)=-1$ and $g(n,N)<0$. At a point $p$, let $T_p:T_pM\times T_pM\to\mathbb R$ be a continuous real symmetric bilinear form, represented by the covariant tensor $T_{ab}$. Define its metric trace by $\operatorname{tr}_g T:=g^{ab}T_{ab}$ and its raised mixed tensor by $T^a{}_b:=g^{ac}T_{cb}$.

- The **weak energy condition (WEC)** holds at $p$ when $T_{ab}v^av^b\ge0$ for every future timelike $v\in T_pM$.
- The **null energy condition (NEC)** holds at $p$ when $T_{ab}\ell^a\ell^b\ge0$ for every nonzero future-directed null $\ell\in T_pM$.
- The **strong energy condition (SEC)** holds at $p$ when the WEC holds for the trace-reversed tensor $T_{ab}-\tfrac12(\operatorname{tr}_gT)g_{ab}$.
- The **dominant energy condition (DEC)** holds at $p$ when, for every future-directed timelike $v\in T_pM$, the vector $J^a:=-T^a{}_bv^b$ is future causal or zero.

These are pointwise algebraic conditions. They are independent of an Einstein equation or an assertion that a physical material realizes $T$. The continuous regularity suffices for the definitions; any differentiability needed for a conservation identity is a separate hypothesis.

For a future unit observer $n$, observer energy density means $T_{ab}n^an^b$. The observer energy-current vector is $-T^a{}_bn^b$, and its spatial energy flux is the projection of this vector into the positive rest space $n^\perp$.

## Remarks

Tong's lecture notes express SEC through a curvature inequality after invoking the Einstein equation. The definition here instead names the pointwise trace-reversed-tensor inequality itself, so no physical field equation is a prerequisite.

In the length-coordinate SI convention, if $T$ has stress-energy units $\mathrm{J\,m^{-3}}$, the spatial projection of $-T^a{}_bn^b$ is an energy-current component with the same units. The corresponding physical energy-flux vector is $c$ times that component, in $\mathrm{W\,m^{-2}}$.
