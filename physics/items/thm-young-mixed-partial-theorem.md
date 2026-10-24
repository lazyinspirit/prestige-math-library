---
id: thm-young-mixed-partial-theorem
kind: theorem
title: "Young's theorem: total differentiability of the first partials forces equality of mixed partials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-total-derivative-in-euclidean-space, cor-mean-value-theorem, cor-differentiable-implies-continuous]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Mixed partial derivatives (Eremenko)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf"
pipeline_run: null
---

## Statement

Let $f$ be defined on a disk $U$ about $(a,b)$, with $f_x$ and $f_y$ existing on $U$. If $f_x$ and $f_y$ are totally differentiable at $(a,b)$, then both mixed partials exist there and $f_{xy}(a,b)=f_{yx}(a,b)$.

## Facts & Assumptions

**Given:** The hypotheses of the statement.

[L1] Total differentiability supplies a linear approximation with an error that is little-oh of the Euclidean increment ([[def-total-derivative-in-euclidean-space]]).

[L2] A total derivative is linear. Restricting its defining expansion to a coordinate axis shows directly that its corresponding coordinate coefficient is the partial derivative in that coordinate ([[def-total-derivative-in-euclidean-space]]).

[L3] The one-variable mean-value theorem applies to a continuous restriction differentiable in the open interval; differentiability supplies the needed continuity ([[cor-mean-value-theorem]], [[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], write $Df_x(a,b)(s,t)=As+Bt$ and $Df_y(a,b)(s,t)=Cs+Dt$. [L1, L2, given, algebra]

$$f_x(a+s,b+t)=f_x(a,b)+As+Bt+o\!\left(\sqrt{s^2+t^2}\right)$$

and analogously $f_y(a+s,b+t)=f_y(a,b)+Cs+Dt+o\!\left(\sqrt{s^2+t^2}\right)$. Restricting the first expansion to $s=0$ and the second to $t=0$ shows that $B=f_{xy}(a,b)$ and $C=f_{yx}(a,b)$; in particular both mixed partials exist.

2.1 By [L3], for small nonzero $h$, define the following rectangular difference. [step 1.1, L3, algebra, choose]

$$\Delta_h:=f(a+h,b+h)-f(a+h,b)-f(a,b+h)+f(a,b).$$

Apply the mean-value theorem to $x\mapsto f(x,b+h)-f(x,b)$ on the interval with endpoints $a,a+h$. For some $\theta_h$ between $0$ and $1$,

$$\Delta_h=h\bigl(f_x(a+\theta_hh,b+h)-f_x(a+\theta_hh,b)\bigr)=Bh^2+o(h^2),$$

where the last equality is the first expansion of step 1.1 at $(\theta_hh,h)$ and $(\theta_hh,0)$.

2.2 Apply [L3] instead to $y\mapsto f(a+h,y)-f(a,y)$ on the interval with endpoints $b,b+h$. [step 1.1, L3, algebra, choose]

For some $\eta_h$ between $0$ and $1$,

$$\Delta_h=h\bigl(f_y(a+h,b+\eta_hh)-f_y(a,b+\eta_hh)\bigr)=Ch^2+o(h^2),$$

by the second expansion of step 1.1 at $(h,\eta_hh)$ and $(0,\eta_hh)$.

3.1 Steps 2.1 and 2.2 give $(B-C)h^2=o(h^2)$. Divide by $h^2$ and let $h\to0$ to obtain $B=C$, hence $f_{xy}(a,b)=f_{yx}(a,b)$. [step 1.1, step 2.1, step 2.2, algebra] ∎
