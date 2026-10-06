---
id: "cor-symmetric-lax-milgram-is-energy-minimisation"
kind: "corollary"
title: "Symmetric Lax--Milgram is energy minimisation"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 5
deps:
  - "cor-inner-product-induces-a-norm"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-hilbert-space"
  - "thm-lax-milgram"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, Corollary 5.8 and the characterisation (18) of the solution by minimising $\\tfrac12a(v,v)-\\langle\\varphi,v\\rangle$, printed p. 140"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.2 and Corollary 4.6: the minimiser of the Dirichlet energy is a weak solution for the symmetric problem, printed pp. 93–95"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§3.10, the Dirichlet principle: minimisers satisfy Poisso's equation weakly, printed pp. 79–82"
---

## Statement

Assume Countable Choice. Let $a$ be a bounded coercive **symmetric** sesquilinear form on a real or complex Hilbert space $H$ with coercivity constant $\alpha>0$ and let $F$ be a bounded conjugate-linear functional, with $u$ the Lax--Milgram solution of [[thm-lax-milgram]]. Then the functional $$J(v):=\tfrac12\operatorname{Re}a(v,v)-\operatorname{Re}F(v)$$ is real valued and attains its strict minimum on $H$ at $u$: $J(v)>J(u)$ for every $v\ne u$. In the real case $J(v)=\tfrac12a(v,v)-F(v)$, and in the complex case $a(v,v)$ is already real by symmetry, so $J(v)=\tfrac12a(v,v)-\operatorname{Re}F(v)$; no claim is made that a nonsymmetric form has such a minimisation. Consequently the solution is characterised by the minimisation problem independently of uniqueness in [[thm-lax-milgram]].

## Facts & Assumptions

**Given:** Countable Choice; a real or complex Hilbert space $H$; a bounded coercive symmetric sesquilinear form $a$ with coercivity constant $\alpha>0$; a bounded conjugate-linear functional $F$; the Lax--Milgram solution $u$ with $a(u,v)=F(v)$ for all $v$; and $J(v)=\tfrac12\operatorname{Re}a(v,v)-\operatorname{Re}F(v)$.

[F1] Symmetry makes $a(v,v)$ real: $a(v,v)=\overline{a(v,v)}$, so $\operatorname{Re}a(v,v)=a(v,v)$; coercivity gives $\operatorname{Re}a(w,w)\ge\alpha\|w\|^2$; and $a$ is linear in the first argument and conjugate-linear in the second, so $a$ is additive in each slot and $a(w,u)=\overline{a(u,w)}$ by symmetry ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[cor-inner-product-induces-a-norm]]).

[F2] The solution satisfies $a(u,w)=F(w)$ for every $w\in H$; existence and uniqueness are those of Lax--Milgram ([[thm-lax-milgram]]).

[F3] Real parts: $\operatorname{Re}z+\operatorname{Re}\overline z=2\operatorname{Re}z$ and $\operatorname{Re}(z_1+z_2)=\operatorname{Re}z_1+\operatorname{Re}z_2$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-hilbert-space]]).



## Proof

1.1 Expansion: write $v=u+w$ with $w:=v-u$. Using additivity in both slots, symmetry and [F3], $$\operatorname{Re}a(v,v)=\operatorname{Re}a(u,u)+\operatorname{Re}\bigl(a(u,w)+\overline{a(u,w)}\bigr)+\operatorname{Re}a(w,w)=\operatorname{Re}a(u,u)+2\operatorname{Re}a(u,w)+\operatorname{Re}a(w,w),$$ while $\operatorname{Re}F(v)=\operatorname{Re}F(u)+\operatorname{Re}F(w)$, so $$J(v)-J(u)=\tfrac12\operatorname{Re}a(w,w)+\operatorname{Re}a(u,w)-\operatorname{Re}F(w).$$ [F1, F3, algebra]

2.1 The linear term vanishes: by [F2], $a(u,w)=F(w)$, hence $\operatorname{Re}a(u,w)-\operatorname{Re}F(w)=0$, and $J(v)-J(u)=\tfrac12\operatorname{Re}a(w,w)\ge\tfrac\alpha2\|w\|^2$ by coercivity. [F1, F2, step 1.1]

3.1 Strict minimum: the right-hand side is positive whenever $w\ne0$; hence $J(v)>J(u)$ for every $v\ne u$, so $J$ is real valued and attains its strict minimum at the Lax--Milgram solution $u$. In the real case $\operatorname{Re}$ is the identity and $J(v)=\tfrac12a(v,v)-F(v)$; in the complex case symmetry makes $a(v,v)$ real, so taking its real part is redundant, while $\operatorname{Re}F(v)$ ensures a real-valued functional. No minimisation claim is made for nonsymmetric forms. [F1, F3, step 2.1] ∎ 