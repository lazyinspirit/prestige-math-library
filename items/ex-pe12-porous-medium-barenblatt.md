---
id: ex-pe12-porous-medium-barenblatt
kind: example
title: A Barenblatt profile has finite propagation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For $m>1$ and $C>0$, put
$$\beta=\frac1{m+1},\qquad k=\frac{m-1}{2m(m+1)},\qquad u(t,x)=t^{-\beta} \left(C-kx^2t^{-2\beta}\right)_+^{1/(m-1)} \quad(t>0,\ x\in\mathbb R),$$
where $r_+=\max(r,0)$. Then $u$ is a nonnegative distributional solution
of the one-dimensional porous-medium equation
$u_t=(u^m)_{xx}$ on $(0,\infty)\times\mathbb R$. For every $t>0$ it is
supported in
$$|x|\le\sqrt{C/k}\,t^{1/(m+1)},$$
so its support radius is finite and grows like $t^{1/(m+1)}$.

## Facts & Assumptions

**Given:** $m>1$, $C>0$, $t>0$, and the displayed profile.

[A1] The exponent $m>1$ and constant $C>0$ are hypotheses; $r_+$ denotes
$\max(r,0)$ as defined in the statement.

## Proof
1.1 Write $\alpha=1/(m-1)$, $y=xt^{-\beta}$, and $F(y)=(C-ky^2)_+^\alpha$. Then $u=t^{-\beta}F(y)$ and $u^m=t^{-m\beta}G(y)$, where $G(y)=(C-ky^2)_+^{\alpha+1}$. Inside the positivity set, $$u_t=t^{-\beta-1}(-\beta F-\beta yF'),\qquad (u^m)_{xx}=t^{-(m+2)\beta}G''.$$ Equality of the time powers requires $\beta+1=(m+2)\beta$, giving $\beta=1/(m+1)$. [A1, given, algebra]

2.1 In the positivity set put $q=C-ky^2>0$. Direct differentiation gives $$F'= -2k\alpha yq^{\alpha-1},\qquad G''=-2k(\alpha+1)q^{\alpha-1}(q-2k\alpha y^2) =-2k(\alpha+1)(F+yF').$$ Choosing $2k(\alpha+1)=\beta$ makes $G''=-\beta(F+yF')$, exactly the remaining profile equation. Since $\alpha+1=m/(m-1)$, this choice is $k=(m-1)/(2m(m+1))$. Thus the PDE holds pointwise wherever $u>0$; both sides vanish in the open set where $u=0$. [A1, step 1.1, algebra]

3.1 The interface is $q=0$. The profile $u$ tends to zero there because $\alpha>0$. The spatial flux $G$ and its first derivative $G'=-2k(\alpha+1)yq_+^\alpha$ also tend to zero at the interface, so distributional differentiation of $G$ creates no boundary delta. Its interior second derivative is locally integrable: its only possible singularity is proportional to $q^{\alpha-1}$ and $\alpha-1>-1$. Likewise, $u_t$ has only a locally integrable $q^{\alpha-1}$ singularity; the moving interface contributes no time delta because the jump of $u$ across it is zero. Hence the pointwise identity of step 2.1 extends distributionally across the interface. [A1, step 2.1, algebra]

4.1 The positivity condition is $C-kx^2t^{-2\beta}>0$, equivalent to $|x|<\sqrt{C/k}\,t^\beta$. Therefore the support is the stated closed interval, with radius proportional to $t^\beta=t^{1/(m+1)}$. This proves finite propagation and the claimed scaling. [A1, step 1.1, given, algebra] ∎
