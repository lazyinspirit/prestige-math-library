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
dependency_roles:
  rem-td-local-equilibrium-branch: formulation-prerequisite
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

Declare the equilibrium constitutive state set $\mathcal E_{\mathrm{eq}}:=\mathcal Z$ and the identity map $q:\mathcal Z\to\mathcal E_{\mathrm{eq}}$. Stipulate the local-equilibrium approximation with this map, so the local constitutive state at $(\mathbf x,t)$ is $q(z(\mathbf x,t))$. The field is static and nonconstant; this stipulation is a model assumption, not an assertion that a physical sample realizes the profile.

## Facts & Assumptions

**Given:** The local-field convention of [[rem-td-local-equilibrium-branch]] and the parameters just specified.

[F1] [[rem-td-local-equilibrium-branch]]: the local-state field has the displayed domain and its components have continuous first spatial and time partial derivatives; a temperature component is read in kelvins.

[F2] [[rem-td-local-equilibrium-branch]]: a local-equilibrium model declares a map $q$ from its local-state parameter set to its equilibrium constitutive-state set and assigns $q(z(\mathbf x,t))$ at each point; nonconstant temperature fields are permitted and do not describe global equilibrium.

[F3] [[rem-td-local-equilibrium-branch]]: nonconstant temperature fields are permitted in this continuum model and do not describe global equilibrium.

[A1] $\mathbf x$ has metre coordinates in $(0,L)^3$, $\Theta_0>0\,\mathrm K$, dimensionless $0<\alpha<1$, $m=1$, $\mathcal Z=(0,\infty)\subseteq\mathbb R$, and $z(\mathbf x,t)=(\Theta_0/(1\,\mathrm K))(1+\alpha x_1/L)$ with $T=(1\,\mathrm K)z$; $\mathcal E_{\mathrm{eq}}=\mathcal Z$ and $q$ is the identity; the model stipulates the resulting pointwise local-equilibrium assignment.

## Verification

**Given:** [F1]–[F3] and [A1].

1.1 Since $0<x_1<L$, $1+\alpha x_1/L>1$, so $z(\mathbf x,t)>\Theta_0/(1\,\mathrm K)>0$ and $T(\mathbf x,t)= (1\,\mathrm K)z(\mathbf x,t)>\Theta_0>0\,\mathrm K$. The affine formulas are $C^1$ on $\mathcal O\times I$ and meet the field regularity in [F1]. [A1, algebra]

1.2 Choose interior points with $x_1=L/4$ and $x_1=3L/4$, keeping the other coordinates fixed. Their temperature difference is $\Theta_0\alpha/2>0$, so the field is not constant. [A1, algebra]

2.1 By [A1], this model declares $q$ and stipulates the pointwise local-equilibrium assignment; by [F1] and step 1.1 its one-coordinate field has the declared range and regularity. Steps 1.1–1.2 show that its temperature component is positive and spatially nonconstant; [F3] says this need not describe global equilibrium. No dynamics or experimental outcome is inferred. [F1, F2, F3, A1, step 1.1, step 1.2, algebra] ∎
