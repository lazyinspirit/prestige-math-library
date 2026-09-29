---
id: thm-smooth-morphism-formally-smooth-finite-presentation
kind: theorem
title: "Smooth morphisms are exactly the formally smooth locally finitely presented morphisms"
status: draft
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - def-formally-smooth-morphism
  - def-locally-finite-presentation-morphism
  - thm-ag-standard-smooth-geometric-regularity
  - def-ag-standard-smooth-algebra
  - thm-conormal-exact-sequence-algebra
  - thm-nakayama-lemma
  - cor-jacobian-presentation-differentials
  - thm-projective-module-characterizations
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.35 (smooth morphisms: formal smoothness criterion)"
      url: https://stacks.math.columbia.edu/tag/01V4
    - title: "EGA IV, 17.5.2 (smooth iff formally smooth and locally of finite presentation)"
      url: http://www.numdam.org/item/PMIHES_1967__32__5_0/
---

## Statement

Assume the Axiom of Choice (AC). A morphism $f:X\to S$ of schemes is
smooth ([[def-smooth-morphism-schemes]]) if and only if it is locally of finite
presentation ([[def-locally-finite-presentation-morphism]]) and formally smooth
in the local lifting convention of [[def-formally-smooth-morphism]].

The lifting convention is the one fixed in the earlier definition: lifts across
square-zero thickenings are required to exist only Zariski locally on the test
scheme, and no uniqueness is required. The 'only if' direction is proved by
solving the local lifting equations with an invertible Jacobian minor of a
standard smooth chart; the 'if' direction extracts such a chart from the
section of a square-zero thickening that formal smoothness supplies.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Assume the Axiom of Choice; it is used in this item through the cited algebra results and through finitely many selections of affine charts, localisations, generators and bases ([[def-axiom-of-choice]]).

[F2] $f$ is smooth at $x$ if and only if $f$ is locally of finite presentation at $x$, flat at $x$, and the fibre $X_{f(x)}$ is geometrically regular at $x$; $f$ is smooth when this holds at every point ([[def-smooth-morphism-schemes]]).

[F3] $f$ is formally smooth if for every square-zero thickening $T_0\hookrightarrow T$ and every commuting $S$-diagram with $T\to S$ and $T_0\to X$, every point of $T$ has an open neighbourhood over which a lift exists; no uniqueness is required ([[def-formally-smooth-morphism]]).

[F4] Assume AC. For a ring map $A\to C$ of finite presentation and a prime $\mathfrak q$, the map is standard smooth at $\mathfrak q$ if and only if $A_{\mathfrak p}\to C_{\mathfrak q}$ is flat and $C\otimes_A\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$, where $\mathfrak p=A\cap\mathfrak q$ ([[thm-ag-standard-smooth-geometric-regularity]], clause 1).

[F5] A standard smooth presentation of an $A$-algebra is an isomorphism with $(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$, $n\ge r\ge0$, such that some $r\times r$ Jacobian minor has image a unit; being standard smooth at a prime means having such a presentation after inverting one element outside the prime ([[def-ag-standard-smooth-algebra]]).

[F6] For $B=P/I$ with $P=A[t_1,\dots,t_m]$ the conormal sequence $I/I^2\to B\otimes_P\Omega_{P/A}\to\Omega_{B/A}\to0$ is exact, the first map sending the class of $f$ to $1\otimes\mathrm df$; only right exactness is asserted ([[thm-conormal-exact-sequence-algebra]]).

[F7] Assume AC. Let $(R,\mathfrak m)$ be a local ring and $N$ a finitely generated $R$-module with $N=\mathfrak mN$; then $N=0$ ([[thm-nakayama-lemma]]).

[F8] Under AC a module is projective if and only if it is a direct summand of a free module ([[thm-projective-module-characterizations]]); a  retraction of an injection exhibits the source as a direct summand of the target with complement the kernel of the retraction.

## Proof

**Proof technique:** direct.

1.1 Reduction to affine rings. Both smoothness at a point, local finite presentation and formal smoothness are conditions on the germ of $f$; fix $x\in X$ with $s=f(x)$, choose affine opens $U=\operatorname{Spec}C\subseteq X$ of $x$ and $V=\operatorname{Spec}A\subseteq S$ of $s$ with $f(U)\subseteq V$ and let $\mathfrak q\subseteq C$ be the prime of $x$. Since $f$ is locally of finite presentation, $A\to C$ is a ring map of finite presentation; write $C=P/I$ with $P=A[t_1,\dots,t_m]$ and $I=(h_1,\dots,h_s)$ finitely generated. [F2, F5, F6]

1.2 Smooth implies formally smooth, at the level of standard smooth charts. Assume $f$ smooth at $x$. By [F4] the finitely presented map $A\to C$ is standard smooth at $\mathfrak q$: after inverting $b\in C\smallsetminus\mathfrak q$, there are $m\ge r\ge0$, polynomials $f_1,\dots,f_r$ in $A[t_1,\dots,t_m]$ and $g$ with $C_b\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$, and some $r\times r$ Jacobian minor becomes a unit. Consider an arbitrary affine square-zero lifting problem $D'\twoheadrightarrow D$ of $A$-algebras, with kernel $J$, together with an $A$-algebra map $u:C_b\to D$. Choose lifts $T_i\in D'$ of $u(t_i)\in D$; the polynomial ring is free, so these choices define an $A$-algebra map from $A[t_1,\dots,t_m]$ to $D'$. Its values $f_j(T)$ lie in $J$. For $\delta_i\in J$, the square-zero Taylor identity is $f_j(T+\delta)=f_j(T)+\sum_i(\partial f_j/\partial t_i)(T)\delta_i$. The chosen Jacobian minor maps to a unit of $D$, hence lifts to a unit of $D'$: if a lift $v$ of its inverse satisfies $uv=1+j$ with $j\in J$, then $(1+j)^{-1}=1-j$. Solve the resulting $r\times r$ linear system with the other $\delta_i=0$ to kill all $f_j$. The corrected map sends $g$ to a unit because its image in $D$ is $u(g)$, a unit, so it extends to $C_b\to D'$. Affine neighbourhoods in a general test thickening reduce its lifting diagram to this ring problem around each point; standard smooth charts cover $X$ when $f$ is smooth. This proves formal smoothness. [F3, F4, F5]

2.1 Formally smooth and locally of finite presentation imply smooth. Assume now that $f$ is locally of finite presentation and formally smooth. In the affine chart of step 1.1, apply formal smoothness [F3] to the square-zero thickening $\operatorname{Spec}(P/I^2)\to\operatorname{Spec}(P/I)=\operatorname{Spec}C$ and the identity of $\operatorname{Spec}C$: since $(I/I^2)^2=0$ in $P/I^2$, locally on $\operatorname{Spec}(P/I^2)$ there is a lift, that is to say, after inverting some $b\notin\mathfrak q$ there is an $A$-algebra section $\sigma\colon C_b\to (P/I^2)_b$ of the projection, so that the composite $C_b\to(P/I^2)_b\to C_b$ is the identity. [F3, F6]

3.1 Conormal splitting. Write $\sigma(\bar t_i)=t_i-g_i$ in $(P/I^2)_b$ with $g_i\in I_b$, where $\bar t_i$ is the image of $t_i$; this is possible because $\sigma$ is a section. For every $f\in I_b$ the element $f(\sigma(\bar t))=\sigma(\bar f)$ is zero, and the Taylor expansion at $t$ with increments $-g$ gives $f(t-g)\equiv f(t)-\sum_i(\partial f/\partial t_i)(t)g_i$ modulo $I_b^2$; since $f(t)$ is the image of $f$ in $(I/I^2)_b$ we obtain $f\equiv\sum_i(\partial f/\partial t_i)\,g_i$ modulo $I_b^2$. Define the $C_b$-linear retraction $\tau\colon C_b\otimes_P\Omega_{P/A}=(C_b)^m\to(I/I^2)_b$ on the basis $\mathrm dt_i$ by $\tau(\mathrm dt_i)=g_i\bmod I^2$. By [F6] the conormal map $\delta\colon(I/I^2)_b\to(C_b)^m$ sends the class of $f$ to $\sum_i(\partial f/\partial t_i)\mathrm dt_i$, so the displayed congruence says exactly $\tau\circ\delta=\mathrm{id}$. Hence $\delta$ is a split injection and $\Omega_{C_b/A}\cong(C_b)^m/\delta(I/I^2)_b$ is a direct summand of the free module $(C_b)^m$, hence a finitely generated projective $C_b$-module by [F8]. [F6, F8, step 2.1]

4.1 Producing a standard smooth chart. Put $Q\subseteq P_b$ for the inverse image of $\mathfrak q$ and work first over the local ring $P_Q$. Let $N=(I/I^2)_b\otimes_{C_b}\kappa(\mathfrak q)$ and let $r=\dim_{\kappa(\mathfrak q)}N$. Choose $f_1,\dots,f_r\in I_b$ whose conormal classes form a basis of $N$, and put $J=(f_1,\dots,f_r)\subseteq P_b$. Nakayama [F7] over the local ring $(C_b)_{\mathfrak q}$ shows that these classes generate $(I/I^2)_{\mathfrak q}$; thus $I_Q=J_Q+I_Q^2$. The finite $P_Q$-module $M=I_Q/J_Q$ therefore satisfies $M=I_QM\subseteq QP_QM$, so Nakayama over $P_Q$ gives $I_Q=J_Q$. The split injection $\delta$ from step 3.1 stays split after tensoring with $\kappa(\mathfrak q)$; the chosen $f_j$ give a basis of its source, so some $r\times r$ Jacobian minor is nonzero in $\kappa(\mathfrak q)$. Since the finitely generated ideal quotient $I_b/J$ vanishes after localization at $Q$, one can invert one element outside $Q$ so that $I=J$ on that smaller chart; invert also a lift of the nonzero Jacobian minor. Then the resulting algebra is a standard smooth presentation near $\mathfrak q$. [F6, F7, step 3.1]

5.1 Conclusion. By step 4.1, after shrinking the chart further around $\mathfrak q$, the finitely presented $A$-algebra $C_b$ is isomorphic to a localization of $A[t_1,\dots,t_m]/(f_1,\dots,f_r)$ with an $r\times r$ Jacobian minor a unit, i.e. it is standard smooth at $\mathfrak q$ in the sense of [F5]. The pointwise criterion [F4] then shows that $A\to C_b$ is flat at $\mathfrak q$ with geometrically regular fibre, so $f$ is smooth at $x$ by [F2]. Since $x$ was arbitrary among the points of the chart and the charts cover $X$ (step 1.2 for the other direction, step 1.1 for the reductions), $f$ is smooth; this proves the 'if' direction. [F2, F4, F5, step 4.1]

5.2 Choice audit. The Axiom of Choice is declared in the Statement and used exactly as recorded in [F1]: through [F4], [F7] and [F8] and through the finitely many affine chart, localisation, generator and basis selections of steps 1.1, 1.2 and 4.1. The Taylor computations of steps 1.2 and 3.1 are polynomial identities and use no choice; the incompatible-axiom branch of the theory is not invoked. [F1, step 1.1, step 1.2, step 4.1]

$\square$
