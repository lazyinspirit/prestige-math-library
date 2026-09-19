---
id: prop-root-vectors-shift-weight-spaces
kind: proposition
title: Root vectors shift weights
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weight-and-weight-space-of-a-lie-algebra-representation, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-representation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.1, Lemma 8.3"
proof_strategy: direct
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with
Cartan subalgebra $\mathfrak h$, let $V$ be a
representation of $\mathfrak g$, let $\alpha$ be a root and let
$\mathfrak g_\alpha$ be its root space
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). If
$x\in\mathfrak g_\alpha$ and $v\in V_\mu$ for some $\mu\in\mathfrak h^*$,
then $x\cdot v\in V_{\mu+\alpha}$
([[def-weight-and-weight-space-of-a-lie-algebra-representation]]); in
particular $x\cdot v=0$ is allowed.

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h,V$, a root $\alpha$, $x\in\mathfrak g_\alpha$, $\mu\in\mathfrak h^*$ and $v\in V_\mu$.

[L1] The action of $\mathfrak g$ on $V$ is a Lie algebra homomorphism into the endomorphisms of $V$ with commutator bracket ([[def-representation-of-a-lie-algebra]]): for all $X,Y$ and $w$, $$X\cdot(Y\cdot w)-Y\cdot(X\cdot w)=[X,Y]\cdot w .$$

[L2] $\mathfrak g_\alpha=\{x:[H,x]=\alpha(H)x\text{ for all }H\in\mathfrak h\}$ ([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]), so $H\cdot v=\mu(H)v$ and $[H,x]=\alpha(H)x$ for $H\in\mathfrak h$.

## Proof

**Proof technique:** direct.

1.1 Let $H\in\mathfrak h$; using [L1] with $X=H$, $Y=x$, $w=v$ and [L2], $H\cdot(x\cdot v)=[H,x]\cdot v+x\cdot(H\cdot v)=\alpha(H)\,x\cdot v+\mu(H)\,x\cdot v=(\alpha+\mu)(H)\,(x\cdot v)$. [L1, L2]

2.1 Equation 1.1 says precisely that $x\cdot v$ is annihilated by $\rho(H)-(\mu+\alpha)(H)\operatorname{id}_V$ for every $H\in\mathfrak h$, that is, $x\cdot v\in V_{\mu+\alpha}$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]]); this includes the possibility $x\cdot v=0$, which lies in every subspace. [step 1.1]

3.1 Steps 1.1 and 2.1 prove the stated containment, including the zero case. [step 2.1] ∎
