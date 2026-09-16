---
id: def-open-and-closed-weyl-chambers
kind: definition
title: Open and closed Weyl chambers
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weyl-group-of-a-root-system, def-positive-system-and-base-of-simple-roots]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §6, Weyl chambers, printed pp. 163-164"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system
([[def-reduced-crystallographic-euclidean-root-system]]). For a root
$\alpha$ the **root hyperplane** is
$L_\alpha=\{x\in E:(x,\alpha)=0\}$. The complement
$E\setminus\bigcup_{\alpha\in\Phi}L_\alpha$ is a finite union of open convex
cones, and its connected components are the **open Weyl chambers** of $\Phi$.
Each chamber is open, convex, and has as its **walls** the root hyperplanes
$L_\alpha$ containing points of its boundary; every chamber is the set of
solutions of a system of strict homogeneous linear inequalities
$\pm(x,\alpha)>0$.

Fix a positive system $\Phi^{+}$ with simple roots
$\Delta=\{\alpha_1,\dots,\alpha_r\}$
([[def-positive-system-and-base-of-simple-roots]]). The **fundamental
chamber** is
$$C=\{x\in E:(x,\alpha_i)>0\text{ for }i=1,\dots,r\},$$
and its **closure** $\overline C$ is defined by the same inequalities with
$\ge$ in place of $>$. The set $C$ is a chamber because it is a nonempty open
convex cone on which no root vanishes: a positive root is a nonnegative
integral combination of the $\alpha_i$
([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]),
so $(x,\alpha)>0$ for $x\in C$ and every positive root $\alpha$. The Weyl
group $W(\Phi)$ ([[def-weyl-group-of-a-root-system]]) permutes the root
hyperplanes and therefore permutes the open chambers; each $w\in W(\Phi)$
sends the closure of a chamber to the closure of its image chamber.
