---
id: prop-ip-constraints-can-remove-kernel-ambiguity
kind: proposition
title: A constraint removes kernel ambiguity exactly when its differences avoid the kernel
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-admissible-constraint-class
  - def-linear-map
  - def-kernel-and-image-of-a-linear-map
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 3 §§3.1–3.2"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §1.2"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html"
---

## Statement

Let $X$ and $Y$ be real vector spaces, let $A:X\to Y$ be linear, and let $C\subseteq X$ be nonempty. The restriction $A|_C:C\to Y$ is injective if and only if

$$ (C-C)\cap\ker A=\{0\}. $$

This condition characterizes exact uniqueness on $C$; it gives no stability bound for perturbed data.

## Statement references

[[def-ip-admissible-constraint-class|Admissible constraint classes and restricted identifiability]]

[[def-linear-map|Linearity of the forward map]]

[[def-kernel-and-image-of-a-linear-map|Kernel of the forward map]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 3 §§3.1–3.2](https://arxiv.org/pdf/2001.00617v2)

[Tristan van Leeuwen and Christoph Brune, *10 Lectures on Inverse Problems and Imaging*, Lecture 1 §1.2](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html)

## Facts & Assumptions

**Given:** Real vector spaces $X,Y$, a linear map $A:X\to Y$, and a nonempty constraint class $C\subseteq X$.

[F1] [[def-ip-admissible-constraint-class]] with $U=X$ and the discrete metrics on $X,Y$ just specified there (used only to instantiate the model; the argument is algebraic): $C$ is nonempty, $C-C=\{x-x':x,x'\in C\}$, and restricted identifiability means $Ax=Ax'$ for $x,x'\in C$ implies $x=x'$.

[F2] [[def-linear-map]]: linearity gives $A(x-x')=Ax-Ax'$.

[F3] [[def-kernel-and-image-of-a-linear-map]]: $\ker A=\{x\in X:Ax=0_Y\}$.

## Proof

1.1 Suppose $A|_C$ is injective and take $v\in(C-C)\cap\ker A$. By [F1], write $v=x-x'$ with $x,x'\in C$. By [F2] and [F3], $Ax-Ax'=Av=0_Y$, so $Ax=Ax'$. Injectivity gives $x=x'$, hence $v=0$. Since $C$ is nonempty, choose $x\in C$; then $0=x-x\in C-C$. Linearity also gives $A(0_X)=A(0_X+0_X)=A(0_X)+A(0_X)$, hence $A(0_X)=0_Y$ and $0_X\in\ker A$. Therefore $(C-C)\cap\ker A=\{0\}$. [given, F1, F2, F3, choose, algebra]

2.1 Conversely, suppose $(C-C)\cap\ker A=\{0\}$ and take $x,x'\in C$ with $Ax=Ax'$. Then $x-x'\in C-C$ by [F1], and $A(x-x')=Ax-Ax'=0_Y$ by [F2], so $x-x'\in\ker A$ by [F3]. Thus $x-x'=0$, hence $x=x'$. Therefore $A|_C$ is injective. [given, F1, F2, F3, algebra] ∎
