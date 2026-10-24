---
id: thm-jacobian-criterion-smooth-morphism
kind: theorem
title: "Relative Jacobian criterion with its presentation hypothesis"
status: published
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-ag-standard-smooth-algebra
  - thm-ag-standard-smooth-geometric-regularity
  - lem-ag-standard-smooth-flatness
  - lem-ag-standard-smooth-regular-geometric-fibres
  - cor-jacobian-presentation-differentials
  - def-relative-dimension-smooth-morphism
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.35 (smooth morphisms)"
      url: https://stacks.math.columbia.edu/tag/01V4
    - title: "H. Matsumura, Commutative Algebra, Ch. 6 (formal smoothness and the Jacobian criterion)"
      url: https://doi.org/10.1017/CBO9781139171761
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be a morphism locally of
finite presentation ([[def-locally-finite-presentation-morphism]]) and let
$x\in X$ with $s=f(x)$. Then $f$ is smooth at $x$
([[def-smooth-morphism-schemes]]) if and only if there are affine open
neighbourhoods $U=\operatorname{Spec}C$ of $x$ and
$V=\operatorname{Spec}A$ of $s$ with $f(U)\subseteq V$ and a presentation of
$C_h$, for some $h\in C\smallsetminus\mathfrak q$ with $\mathfrak q$ the prime
of $x$, as
$$C_h\;\cong\;\Bigl(A[t_1,\dots,t_m]/(f_1,\dots,f_r)\Bigr)_g,$$
in which some $r\times r$ minor of the Jacobian matrix
$\bigl(\partial f_j/\partial t_i\bigr)$ has image a unit of $C_h$. Such a chart
is flat over $A$ with geometrically regular fibres whose components have
dimension $m-r$; in the local-dimension convention of
[[def-relative-dimension-smooth-morphism]] it exhibits relative dimension
$m-r$ at $x$.

The criterion demands that *some* presentation have an invertible $r\times r$
minor; it does not demand this of an arbitrary redundant equation list, and
$r>m$ makes an invertible $r\times r$ minor impossible by definition of the
matrix shape.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Assume the Axiom of Choice; in this item it is used only through the cited algebra results; the selections of affine charts, primes and generators are finite ([[def-axiom-of-choice]]).

[F2] $f$ is smooth at $x$ if and only if $f$ is locally of finite presentation at $x$, flat at $x$, and the fibre $X_{f(x)}$ is geometrically regular at $x$ ([[def-smooth-morphism-schemes]]).

[F3] A standard smooth presentation of an $A$-algebra is an isomorphism with $(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ in which an $r\times r$ Jacobian minor has image a unit; a finitely presented $A$-algebra is standard smooth at a prime $\mathfrak q$ if such a presentation exists after inverting some $h\notin\mathfrak q$ ([[def-ag-standard-smooth-algebra]]).

[F4] Assume AC. For a ring map $A\to C$ of finite presentation and a prime $\mathfrak q$ with $\mathfrak p=A\cap\mathfrak q$, the map is standard smooth at $\mathfrak q$ if and only if $A_{\mathfrak p}\to C_{\mathfrak q}$ is flat and the fibre $C\otimes_A\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$ ([[thm-ag-standard-smooth-geometric-regularity]], clause 1).

[F5] Assume AC. A standard smooth $A$-algebra is a finitely presented and flat $A$-algebra ([[lem-ag-standard-smooth-flatness]]).

[F6] Assume AC. For a standard smooth presentation with $m$ variables and $r$ equations, every local ring of every geometric fibre is regular, every irreducible component of every geometric fibre has dimension $m-r$, and the local ring at a prime $Q$ of the fibre is regular of dimension $\operatorname{ht}(Q')-r$, where $Q'$ is the corresponding prime in the polynomial ring over the fibre field ([[lem-ag-standard-smooth-regular-geometric-fibres]]).

[F7] For $C=A[t_1,\dots,t_m]/(f_1,\dots,f_r)$ the module $\Omega_{C/A}$ is the cokernel of the Jacobian map $C^r\to C^m$; this presentation carries no flatness or fibre hypothesis by itself ([[cor-jacobian-presentation-differentials]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ with $s=f(x)$ and choose affine open neighbourhoods $U=\operatorname{Spec}C\subseteq X$ of $x$ and $V=\operatorname{Spec}A\subseteq S$ of $s$ with $f(U)\subseteq V$; let $\mathfrak q\subseteq C$ be the prime defining $x$. Since $f$ is locally of finite presentation, $A\to C$ is a ring map of finite presentation. [F3, F4]

1.2 Suppose first that $f$ is smooth at $x$. By [F2] the map $A\to C$ is flat at $\mathfrak q$ and its fibre at $\mathfrak q$ is geometrically regular. By the pointwise criterion [F4] applied to the finitely presented map $A\to C$ at $\mathfrak q$, the map is standard smooth at $\mathfrak q$: there is $h\in C\smallsetminus\mathfrak q$ with $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ and an $r\times r$ Jacobian minor whose image in $C_h$ is a unit. Thus the required chart exists and the 'only if' direction of the theorem holds. [F2, F4]

1.3 Conversely, suppose such data $U$, $V$, $h$, $m$, $r$, $f_j$, $g$ and an invertible minor are given at $x$. Then $A\to C_h$ is a standard smooth $A$-algebra in the sense of [F3], so by [F5] it is flat and finitely presented over $A$; by [F6] its geometric fibres are regular, with every irreducible component of dimension $m-r$. Since $f$ is moreover locally of finite presentation, the pointwise criterion [F2] applies at $x$ and shows that $f$ is smooth at $x$. This proves the 'if' direction and identifies the chart as flat with geometrically regular fibres. [F2, F3, F5, F6]

1.4 Dimension clause. By [F6], every irreducible component of the fibre of the chart over any field extension of $\kappa(\mathfrak p)$ has dimension $m-r$, so for a point $y$ of the geometric fibre lying over the image of $x$, every open neighbourhood of $y$ in that fibre has dimension $m-r$ and the local dimension of [[def-relative-dimension-smooth-morphism]] equals $m-r$; this is independent of the field extension. Hence the chart has relative dimension $m-r$ at $x$ in the convention fixed on this page, and the same computation is what makes the integer attached to a smooth point well defined there. [F6]

2.1 Presentation warning. The presentation produced in step 1.2 is existential, and the criterion must not be applied to an arbitrary equation list: over a field $k$, the algebra $k=k[t]/(t)$ is smooth of relative dimension $0$ and has the presentation $k[t]/(t)$, whose $1\times1$ Jacobian matrix has entry $1$, an invertible minor; but the redundant list $(t,t^2)$ writes the same quotient with $r=2$ and $m=1$, so the Jacobian matrix is $2\times1$ and has no $2\times2$ minor at all. By [F7] the module of differentials is unchanged by the redundant presentation; only the existence of one good presentation is asserted. [F3, F7]

2.2 Choice audit. The Axiom of Choice is used as declared in [F1], through [F4], [F5] and [F6]. The affine chart, prime and generator selections of steps 1.1 and 1.2 are finite. No other choice principle and no incompatible-axiom branch is invoked. [F1, step 1.1, step 1.2]

$\square$
