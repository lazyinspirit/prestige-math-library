---
id: ex-td-local-equilibrium-profile
kind: example
domain: physics
library: physics
title: A nonconstant local-equilibrium temperature field
status: draft
origin: pipeline
dependency_level: 1
deps:
  - rem-td-local-equilibrium-branch
  - def-natural-logarithm
dependency_roles:
  rem-td-local-equilibrium-branch: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: A stipulated static local-equilibrium field on an open cube; no global equilibrium, transport law or observation is asserted.
sources:
  references: []
---

## Example

Take $\mathcal O=(0,L)^3$ in metre coordinates and $I=(0,\tau)$ in second coordinates, with $L>0\,\mathrm m$ and $\tau>0\,\mathrm s$. Choose $\Theta_0>0\,\mathrm K$ and dimensionless $0<\alpha<1$. Instantiate $m=1$ and the local-state parameter set $\mathcal Z=(0,\infty)\subseteq\mathbb R^1$, and define its one-coordinate field $z:\mathcal O\times I\to\mathcal Z$ by

$$z(\mathbf x,t)=\frac{\Theta_0}{1\,\mathrm K}\left(1+\alpha\frac{x_1}{L}\right),\qquad T(\mathbf x,t)=(1\,\mathrm K)z(\mathbf x,t)=\Theta_0\left(1+\alpha\frac{x_1}{L}\right).$$

For the homogeneous comparison cell, supply $\mathcal X=(0,\infty)\times\mathbb R$ with states $(e,y)$, physical energy $(1\,\mathrm J)e$, and numerical entropy $s(e,y)=\ln e-y^2$, where $\ln:(0,\infty)\to\mathbb R$ is the natural logarithm of [[def-natural-logarithm]] and physical entropy is $(1\,\mathrm{J\,K^{-1}})s(e,y)$. The coordinate $y$ is dimensionless. Set $r=1$, $C(e,y)=e$, $c(a)=a$, and $B_a=\mathcal X$ for every $a\in\mathcal Z$, so the fixed-energy admissible set is $A_a=\{(a,y):y\in\mathbb R\}$. Its entropy-maximizing set is $E_a=\{(a,0)\}$. Define $\mathcal E_{\mathrm{eq}}=\bigcup_{a>0}E_a$ and supply $q(a)=(a,0)$; assign this comparison state temperature $(1\,\mathrm K)a$. Stipulate the local-equilibrium approximation with this map, so the local constitutive state at $(\mathbf x,t)$ is $q(z(\mathbf x,t))$. The field is static and nonconstant; this stipulation is a model assumption, not an assertion that a physical sample realizes the profile.

## Facts & Assumptions

**Given:** The local-field convention of [[rem-td-local-equilibrium-branch]] and the parameters just specified.

[F1] [[rem-td-local-equilibrium-branch]]: the local-state field has the displayed domain and its components have continuous first spatial and time partial derivatives; a temperature component is read in kelvins.

[F2] [[rem-td-local-equilibrium-branch]]: an entropy-based local-equilibrium model supplies cell states, entropy, retained constraints and conserved-value maps; $E_a$ is the entropy-maximizing subset of $A_a=\{e\in B_a:C(e)=c(a)\}$, and the supplied map must satisfy $q(a)\in E_a$. Its pointwise comparison state is $q(z(\mathbf x,t))$; attainment is verified for the supplied model rather than inferred from a label.

[F3] [[rem-td-local-equilibrium-branch]]: nonconstant temperature fields are permitted in this continuum model; the pointwise local-equilibrium assignment alone does not assert global equilibrium.

[F4] [[def-natural-logarithm]] defines $\ln:(0,\infty)\to\mathbb R$, so the supplied cell entropy is finite at every cell state.

[A1] $\mathbf x$ has metre coordinates in $(0,L)^3$, $\Theta_0>0\,\mathrm K$, dimensionless $0<\alpha<1$, $m=1$, $\mathcal Z=(0,\infty)\subseteq\mathbb R$, and $z(\mathbf x,t)=(\Theta_0/(1\,\mathrm K))(1+\alpha x_1/L)$ with $T=(1\,\mathrm K)z$; the cell data $\mathcal X,s,C,c,B_a$ are exactly those in the Example and $q(a)=(a,0)$; the model stipulates the resulting pointwise local-equilibrium assignment.

## Verification

**Given:** [F1]–[F4] and [A1].

1.1 Since $0<x_1<L$, $1+\alpha x_1/L>1$, so $z(\mathbf x,t)>\Theta_0/(1\,\mathrm K)>0$ and $T(\mathbf x,t)= (1\,\mathrm K)z(\mathbf x,t)>\Theta_0>0\,\mathrm K$. The affine formulas are $C^1$ on $\mathcal O\times I$ and meet the field regularity in [F1]. [A1, algebra]

1.2 Choose interior points with $x_1=L/4$ and $x_1=3L/4$, keeping the other coordinates fixed. Their temperature difference is $\Theta_0\alpha/2>0$, so the field is not constant. [A1, algebra]

2.1 For each $a>0$, [A1] gives $A_a=\{(a,y):y\in\mathbb R\}$ and $s(a,0)-s(a,y)=y^2\ge0$, with equality exactly at $y=0$. Thus $E_a=\{(a,0)\}$ and $q(a)\in E_a$, meeting the constrained-maximum criterion in [F2]. The logarithm is finite since $a>0$. By [F1] and step 1.1, the one-coordinate field has the declared range and regularity, so its supplied comparison state is $q(z(\mathbf x,t))$. Steps 1.1–1.2 show that its temperature component is positive and spatially nonconstant; [F3] says this need not describe global equilibrium. No dynamics or experimental outcome is inferred. [F1, F2, F3, F4, A1, step 1.1, step 1.2, algebra] ∎
