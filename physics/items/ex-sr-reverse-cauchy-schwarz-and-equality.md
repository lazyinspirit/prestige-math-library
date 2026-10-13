---
id: ex-sr-reverse-cauchy-schwarz-and-equality
kind: example
title: "Worked reverse Cauchy-Schwarz and reverse triangle inequalities"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors, cor-sr-reverse-triangle-and-future-cone-convexity, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, lem-timelike-cone-has-two-convex-components, def-lorentz-form-and-inertia, thm-of-square-roots, lem-of-square-monotone, def-ordered-field]
dependency_roles:
  lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors: mathematical-premise
  cor-sr-reverse-triangle-and-future-cone-convexity: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-ordered-field: mathematical-premise
dependency_level: 8
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.5 'Triangle and Cauchy-Schwarz inequalities' pp. 36-37; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (timelike geodesics maximize proper time; the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30 (Minkowski example: straight lines are extremal and maximize); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Example

Worked computation in the chart $x$ of an inertial frame with
$\eta_0=\operatorname{diag}(-1,1,1,1)$; the vectors below are coordinate columns
in the frame's basis.

**(a)** For $v:=(5,3,0,0)$ and $w:=(5,-3,0,0)$ one has
$\eta(v,v)=\eta(w,w)=-25+9=-16$, so the timelike lengths are
$\sqrt{16}=4$ each, and $\eta(v,w)=-25-9=-34$, so $-\eta(v,w)=34\ge4\cdot4=16$;
the inequality is strict because $v$ and $w$ are not positive proportional.

**(b)** For $w':=2v=(10,6,0,0)$ one has $\eta(w',w')=-64$ and
$\sqrt{-\eta(w',w')}=8$, while $\eta(v,w')=-50+18=-32$, so
$-\eta(v,w')=32=4\cdot8$: this is the equality case of the reversed
Cauchy-Schwarz inequality, attained by the positive proportional pair
$(v,2v)$.

**(c)** Reverse triangle: $v+w=(10,0,0,0)$ has
$-\eta(v+w,v+w)=100$, so its root is $10\ge4+4=8$, again strict because $v$ and
$w$ are not positive proportional. For $u:=(5,0,0,0)$, of timelike length $5$,
one has $-\eta(v,u)=25\ge4\cdot5=20$ and $v+u=(10,3,0,0)$ with
$\sqrt{-\eta(v+u,v+u)}=\sqrt{100-9}=\sqrt{91}\ge4+5=9$, since $91>81$.

**(d)** Each of $v$, $w$, $w'$ and $u$ is future timelike ($5>3$, $5>3$,
$10>6$ and $5>0$ in the first coordinate against the spatial norm), so all
inequalities above are instances of the future timelike hypotheses of
[[lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors]] and
[[cor-sr-reverse-triangle-and-future-cone-convexity]].

## Facts & Assumptions

**Given:** An inertial frame with chart $x$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, and the coordinate vectors $v=(5,3,0,0)$, $w=(5,-3,0,0)$, $w'=(10,6,0,0)$, $u=(5,0,0,0)$ ([[def-inertial-frame-and-inertial-chart]]).

[L1] Pairing in the frame: $\eta(r,r')=-r^0r'^0+r^1r'^1+r^2r'^2+r^3r'^3$ for coordinate vectors $r,r'$ ([[def-inertial-frame-and-inertial-chart]], [[def-lorentz-form-and-inertia]]).

[L2] Causal classification and cone coordinates: $r$ is timelike when $\eta(r,r)<0$, and in a frame with future first vector $r$ is future timelike exactly when $r^0>|r_s|$ with $|r_s|=\sqrt{(r^1)^2+(r^2)^2+(r^3)^2}$ ([[def-causal-classification-of-lorentz-vectors]], [[lem-timelike-cone-has-two-convex-components]]).

[L3] Reversed Cauchy-Schwarz inequality: for future timelike $r,s$ with $a=\sqrt{-\eta(r,r)}$, $b=\sqrt{-\eta(s,s)}$ one has $-\eta(r,s)\ge ab$, with equality exactly when $r$ and $s$ are positive proportional ([[lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors]]).

[L4] Reversed triangle inequality: for future timelike $r,s$ one has $r+s$ future timelike and $\sqrt{-\eta(r+s,r+s)}\ge\sqrt{-\eta(r,r)}+\sqrt{-\eta(s,s)}$, with equality exactly when $r$ and $s$ are positive proportional ([[cor-sr-reverse-triangle-and-future-cone-convexity]]).

[L5] Square roots and monotonicity: every real $c\ge0$ has a unique $\sqrt c\ge0$ with $(\sqrt c)^2=c$, so in particular $\sqrt{16}=4$; for $x,y\ge0$ one has $x<y\iff x^2<y^2$ ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[L6] Elementary order arithmetic in $\mathbb{R}$: the order is trichotomous and transitive ([[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Evaluating the diagonal form [L1] on the given coordinate vectors gives $\eta(v,v)=-25+9=-16$, $\eta(w,w)=-25+9=-16$, $\eta(w',w')=-100+36=-64$, $\eta(u,u)=-25$, $\eta(v,w)=-25-9=-34$, $\eta(v,w')=-50+18=-32$, $\eta(v,u)=-25$, $\eta(v+w,v+w)=\eta((10,0,0,0),(10,0,0,0))=-100$ and $\eta(v+u,v+u)=-100+9=-91$. [given, L1, algebra]

2.1 By [L2] each of the four vectors is future timelike: $v^0=5>3=|v_s|$, $w^0=5>3=|w_s|$, $(w')^0=10>6=|(w')_s|$ and $u^0=5>0=|u_s|$; this is (d). [step 1.1, L2, algebra]

3.1 For (a): $\sqrt{-\eta(v,v)}=\sqrt{-\eta(w,w)}=\sqrt{16}=4$ by [L5], so the right-hand side is $16$, while $-\eta(v,w)=34$; the pair is not positive proportional, since $w=tv$ would give $t=1$ from the first coordinates and then $-3=3t$, a contradiction, and $v=tw$ fails the same way; hence the strict clause of [L3] gives $34>16$, as claimed. [step 1.1, step 2.1, L3, L5, L6, algebra]

3.2 For (b): $w'=2v$ with $2>0$, so the pair $(v,w')$ is positive proportional; by the equality case of [L3] applied to the future timelike pair $(v,w')$ one gets $-\eta(v,w')=\sqrt{-\eta(v,v)}\sqrt{-\eta(w',w')}$, and the values of step 1.1 give $\sqrt{-\eta(w',w')}=\sqrt{64}=8$ and $32=4\cdot8$, the displayed equality. [step 1.1, step 2.1, L3, L5, algebra]

4.1 For (c): the sum $v+w$ has the coordinate column $(10,0,0,0)$, so $-\eta(v+w,v+w)=100$ and $\sqrt{100}=10$ by [L5], and [L4] gives $10\ge4+4=8$; equality would force $v$ and $w$ positive proportional by [L4], which step 3.1 excludes, so the inequality is strict. Similarly $-\eta(v,u)=25\ge4\cdot5=20$ with strictness by [L3] since $v$ and $u$ are not positive proportional, and $v+u$ has coordinate column $(10,3,0,0)$ with $-\eta(v+u,v+u)=91$; since $91>81=9^2$ with $9\ge0$ and $\sqrt{91}\ge0$, monotonicity of squaring on the nonnegatives [L5] gives $\sqrt{91}>9=4+5$. [step 1.1, step 2.1, step 3.1, L3, L4, L5, algebra]

5.1 Steps 3.1, 3.2 and 4.1 verify the strict, equality and strict reverse-triangle instances of (a), (b) and (c) respectively, all under the future timelike hypotheses confirmed in step 2.1; the equality case occurs exactly at the positive proportional pair of (b), in agreement with [L3] and [L4]. [step 2.1, step 3.1, step 3.2, step 4.1, L3, L4] ∎
