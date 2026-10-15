---
id: cex-tdmath-closed-punctured-plane-form-is-not-exact
kind: counterexample
title: "A closed one-form on the punctured plane with nonzero period"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tdmath-one-form-and-horizontal-path, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-gradient-theorem-for-line-integrals, thm-continuous-implies-integrable, thm-newton-leibniz-with-interior-derivative]
dependency_roles:
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  thm-gradient-theorem-for-line-integrals: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, §§9.2.11 and 9.3.3, full-text line-integral chapter"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement refuted

Every closed $C^1$ one-form on every connected open domain in $\mathbb R^2$ is globally exact.

## Facts & Assumptions

**Given:** Here closed means $d\omega=0$ by the coordinate formula, and exact means $\omega=dS$ for a globally defined $C^2$ scalar function $S$ on the stated open domain.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: the coordinate formula for $d\omega$ and the coordinate action of a one-form.

[F2] [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]: for $F=(P,Q)$ and a piecewise-$C^1$ curve $\gamma$, $\int_\gamma F\cdot d\mathbf r=\int(P(\gamma)\gamma'_1+Q(\gamma)\gamma'_2)\,dt$.

[F3] [[thm-gradient-theorem-for-line-integrals]]: if $F=\nabla S$ on an open set, its line integral along $\gamma$ is $S(\gamma(1))-S(\gamma(0))$.

[F4] [[thm-continuous-implies-integrable]] and [[thm-newton-leibniz-with-interior-derivative]]: continuous integrands are Riemann integrable, and $\int_0^{2\pi}1\,dt=2\pi$.

## Counterexample

1.1 Let $D=\mathbb R^2\setminus\{(0,0)\}$ and $\omega=P\,dx+Q\,dy$ with $P(x,y)=-y/(x^2+y^2)$ and $Q(x,y)=x/(x^2+y^2)$. The domain $D$ is open since each nonzero point has a ball avoiding the origin. The coefficient vector $(P,Q)=(-y,x)/(x^2+y^2)$ is nonzero at every point of $D$. The domain is path-connected: if the segment joining $p,q\in D$ avoids $0$, use that segment; if it contains $0$, then $p,q,0$ are collinear. Writing $p=(p_1,p_2)$, take $r=(-p_2,p_1)$; it is nonzero and perpendicular to $p$, so $p,r$ and $q,r$ are linearly independent pairs and the segments $[p,r]$ and $[r,q]$ avoid $0$. [given, F1]

2.1 Write $r^2=x^2+y^2>0$. For sufficiently small $h$, direct difference quotients give $\partial_xP=2xy/r^4$, $\partial_yQ=-2xy/r^4$, and $\partial_xQ=\partial_yP=(y^2-x^2)/r^4$: for example, $\bigl(Q(x+h,y)-Q(x,y)\bigr)/h=(y^2-x^2-xh)/(r^2((x+h)^2+y^2))$ and $\bigl(P(x,y+h)-P(x,y)\bigr)/h=(y^2-x^2+yh)/(r^2(x^2+(y+h)^2))$, while the other two quotients are $y(2x+h)/(r^2((x+h)^2+y^2))$ and $-x(2y+h)/(r^2(x^2+(y+h)^2))$. These limits are continuous on $D$, so $P,Q\in C^1(D)$; the cross partials agree and the coordinate definition [F1] gives $d\omega=(\partial_xQ-\partial_yP)dx\wedge dy=0$. [F1, step 1.1, algebra]

2.2 The unit circle $\gamma(t)=(\cos t,\sin t)$, $0\le t\le2\pi$, lies in the domain and uses the form defined in step 1.1. Along it $(P,Q)=(-\sin t,\cos t)=\gamma'(t)$, hence [F2] gives $\int_\gamma\omega=\int_0^{2\pi}1\,dt=2\pi$ by [F4]. [F2, F4, step 1.1, construct]

3.1 The closedness is proved in step 2.1. If $\omega=dS$ globally on $D$, then $F=\nabla S$ for the corresponding vector field, and [F3] would give $\int_\gamma\omega=S(\gamma(2\pi))-S(\gamma(0))=0$, contradicting step 2.2. Thus $\omega$ is closed but not globally exact. This does not assert that every possible global integrating factor is absent. [F3, step 2.1, step 2.2, discharge-contradiction] ∎
