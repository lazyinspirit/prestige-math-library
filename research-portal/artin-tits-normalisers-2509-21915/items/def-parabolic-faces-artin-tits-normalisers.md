---
id: def-parabolic-faces-artin-tits-normalisers
kind: definition
title: Parabolic coordinate subspaces and fundamental faces
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - math:def-algebraic-dual-and-linear-functional
  - math:def-linear-subspace
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  math:def-algebraic-dual-and-linear-functional: mathematical-premise
  math:def-linear-subspace: mathematical-premise
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 7, equations (3.1)–(3.2)
      statement: For $I\subseteq\Gamma_0$, the article defines $\Theta_I$ by vanishing
        on the simple roots indexed by $I$ and $C_I$ by strict positivity on the
        remaining simple roots.
      hypotheses: The Coxeter-system and dual-space notation of §§2–3; $I$ is any
        subset of the vertex set.
      reading_limits: The frozen article text at §3.1 was read for attribution of
        these definitions. This reference is not used as a proof or independent
        prerequisite.
dependency_level: 2
---

## Definition

Use the Coxeter-system notation of [[def-coxeter-data-artin-tits-normalisers]]: $\Gamma_0$ is the vertex set, $V=\bigoplus_{i\in\Gamma_0}\mathbb R\alpha_i$ has basis $(\alpha_i)_{i\in\Gamma_0}$, and $\Theta=V^*$ is the space of real linear functionals on $V$. The vertex set may be infinite.

For $I\subseteq\Gamma_0$, write $I^c=\Gamma_0\setminus I$. Define the parabolic coordinate subspace $\Theta_I$ and the fundamental face $C_I$ by $\Theta_I=\{\varphi\in\Theta:\varphi(\alpha_i)=0\text{ for every }i\in I\}$ and $C_I=\{\varphi\in\Theta_I:\varphi(\alpha_j)>0\text{ for every }j\in I^c\}$.

## Justification

By [[def-coxeter-data-artin-tits-normalisers]], the $\alpha_i$ form a basis and $\Theta$ is the algebraic dual. Its elements are linear maps with pointwise vector-space operations, as in [[math:def-algebraic-dual-and-linear-functional]]. The zero functional belongs to $\Theta_I$. If $f,g\in\Theta_I$, then $(f+g)(\alpha_i)=f(\alpha_i)+g(\alpha_i)=0$ for every $i\in I$; for $r\in\mathbb R$, $(rf)(\alpha_i)=rf(\alpha_i)=0$ for every $i\in I$. Thus $\Theta_I$ contains zero and is closed under addition and scalar multiplication, so it is a linear subspace by [[math:def-linear-subspace]]. The strict inequalities select a well-defined subset $C_I$ of it. For nonemptiness, construct the functional explicitly. Write $v=\sum_{j\in F}a_j\alpha_j$ with $F\subseteq\Gamma_0$ finite, and set $\varphi_I(v)=\sum_{j\in F\setminus I}a_j$. The basis property makes the coefficients unique, and enlarging $F$ adds only zero coefficients, so this is a well-defined real number independent of the finite presentation.

For $u=\sum_{j\in F}a_j\alpha_j$ and $v=\sum_{j\in F}b_j\alpha_j$, use a common finite $F$ by adjoining zero coefficients. For $r,s\in\mathbb R$, finite-sum distributivity gives $\varphi_I(ru+sv)=\sum_{j\in F\setminus I}(ra_j+sb_j)=r\varphi_I(u)+s\varphi_I(v)$. Hence $\varphi_I$ is linear and belongs to $\Theta$. Its value on $\alpha_i$ is $0$ for $i\in I$ and $1$ for $i\notin I$, so $\varphi_I\in C_I$.

If $\psi\in\Theta$ has these same prescribed basis values, linearity on each finite sum gives $\psi(v)=\sum_{j\in F}a_j\psi(\alpha_j)=\sum_{j\in F\setminus I}a_j=\varphi_I(v)$, proving uniqueness. If $I=\Gamma_0$, the formula gives the zero functional; it also applies when the vertex set is empty, with every sum empty. No choice of an additional basis or infinite summation is used.
