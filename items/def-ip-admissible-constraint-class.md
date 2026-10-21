---
id: def-ip-admissible-constraint-class
kind: definition
title: Admissible constraint classes and restricted identifiability
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-forward-map-and-solution-classes
  - def-linear-map
  - def-kernel-and-image-of-a-linear-map
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 3 §§3.1–3.2"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §1.2"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html"
verification:
  precheck: n/a
---

## Definition

Let $X$ and $Y$ be real vector spaces, let $U\subseteq X$ be nonempty, and let $A:X\to Y$ be linear. Supply metrics $d_X$ on $X$ and $d_Y$ on $Y$; for a purely algebraic instance with no specified metrics, use the discrete metrics $d_X(x,x')=0$ if $x=x'$ and $1$ otherwise, and likewise on $Y$. These metrics require no compatibility with the vector operations, and no continuity of $A$ is assumed. The discrete triangle inequality holds because, if two endpoints differ, at least one of the two successive pairs differs. Give $U$ and its subsets their restricted metrics. Thus every pair of real vector spaces still admits this convention. The corresponding metric-space inverse-problem model has admissible truths $U$ and forward map $A|_U$. An **admissible constraint class** is a nonempty subset $C\subseteq U$; its constrained forward map is the restriction $A|_C:C\to Y$. The class $C$ is **identifiable for $A$** if $A|_C$ is injective, meaning $Ax=Ax'$ for $x,x'\in C$ implies $x=x'$. Define the difference set and kernel by

$$C-C:=\{x-x':x,x'\in C\},\qquad \ker A:=\{x\in X:Ax=0_Y\}.$$

## Definition references

[[def-ip-forward-map-and-solution-classes|Forward maps and admissible truth classes]]

[[def-linear-map|Linear maps between vector spaces]]

[[def-kernel-and-image-of-a-linear-map|Kernel of a linear map]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 3 §§3.1–3.2](https://arxiv.org/pdf/2001.00617v2)

[Tristan van Leeuwen and Christoph Brune, *10 Lectures on Inverse Problems and Imaging*, Lecture 1 §1.2](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html)
