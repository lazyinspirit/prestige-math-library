---
id: thm-na-mixed-galerkin-quasioptimality
kind: theorem
title: "Mixed Galerkin error bound retaining beta_h"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    "thm-na-babuska-brezzi-kernel-coercivity",
    "thm-na-infsup-bounded-right-inverse-hilbert",
    "def-countable-choice"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation
        and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2,
        8.5.5, 8.6.1, 8.7.1 and 8.10."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $V,Q$ be real Hilbert spaces and let $F\in V\prime$, $G\in Q\prime$ be bounded data. Suppose bounded bilinear forms $a,b$ and $(u,p)\in V\times Q$ satisfy
$$a(u,v)+b(v,p)=F(v),\qquad b(u,q)=G(q)$$
for all $v\in V,q\in Q$. Let $V_h\subset V$, $Q_h\subset Q$ be finite-dimensional conforming subspaces, with $V_h\ne\{0\}$, $Q_h\ne\{0\}$, and discrete inf-sup constant $\beta_h:=\inf_{q_h\ne0}\sup_{v_h\ne0}b(v_h,q_h)/(\|v_h\|_V\|q_h\|_Q)>0$. Assume the **discrete** kernel coercivity $a(v_h,v_h)\ge\alpha_*\|v_h\|_V^2$ for every $v_h\in Z_h:=\{w_h:b(w_h,q_h)=0\text{ for all }q_h\in Q_h\}$, where $\alpha_*>0$. Put $M_a=\|a\|$, $M_b=\|b\|$. The Galerkin system with the same $F,G$ has a unique solution $(u_h,p_h)$. For any $w_h\in V_h$, $r_h\in Q_h$, define $\delta_u=\|u-w_h\|_V$, $\delta_p=\|p-r_h\|_Q$, $R_h=\beta_h^{-1}M_b\delta_u$, and
$$U_h=\delta_u+\alpha_*^{-1}\{M_a(\delta_u+R_h)+M_b\delta_p\}+R_h,$$
$$P_h=\delta_p+\beta_h^{-1}\{M_a(U_h+\delta_u)+M_b\delta_p\}.$$
Then $\|u-u_h\|_V\le U_h$ and $\|p-p_h\|_Q\le P_h$. In particular the pressure bound retains $\beta_h^{-1}$ explicitly; taking infima over $w_h,r_h$ gives the corresponding best-approximation bound.

## Facts & Assumptions

**Given:** A continuous solution, nonzero conforming finite-dimensional subspaces $V_h,Q_h$, positive discrete inf-sup $\beta_h$, boundedness constants $M_a,M_b$, and coercivity on $Z_h$ with constant $\alpha_*$. The discrete equations use the same $F,G$.

[A1] Countable Choice is used through the Babuška–Brezzi/Lax–Milgram solvability theorem for the discrete pair. ([[def-countable-choice]])

[F1] On any real Hilbert pair, coercivity on the constraint kernel and a positive inf-sup constant give unique mixed solvability. ([[thm-na-babuska-brezzi-kernel-coercivity]])

[F2] The discrete inf-sup bound gives a right inverse of the discrete constraint operator with norm at most $\beta_h^{-1}$. ([[thm-na-infsup-bounded-right-inverse-hilbert]])

## Proof

1.1 Apply [F1] to $V_h,Q_h$ with the assumed $Z_h$-coercivity and discrete inf-sup constant $\beta_h$. Since the restricted forms are bounded, the Galerkin system with the same $F,G$ has a unique solution $(u_h,p_h)$. [A1, F1, given]

2.1 Fix $w_h,r_h$ and set $\theta_u=w_h-u_h$, $\theta_p=r_h-p_h$, $\eta_u=u-w_h$, $\eta_p=p-r_h$. Subtracting the discrete equations from the continuous equations gives $a(\theta_u,v_h)+b(v_h,\theta_p)=-a(\eta_u,v_h)-b(v_h,\eta_p)$ and $b(\theta_u,q_h)=-b(\eta_u,q_h)$. [A1, given, step 1.1]

3.1 The second identity implies $\|B_h\theta_u\|_Q\le M_b\delta_u$. By [F2] choose $r_u\in V_h$ with $B_hr_u=B_h\theta_u$ and $\|r_u\|_V\le R_h$. Then $z_h=\theta_u-r_u\in Z_h$. [A1, F2, step 2.1]

4.1 Test the first identity of step 2.1 with $z_h$. Since $b(z_h,\theta_p)=0$, $a(z_h,z_h)=-a(\eta_u,z_h)-b(z_h,\eta_p)-a(r_u,z_h)$. Discrete-kernel coercivity and boundedness imply, when $z_h\ne0$, $\|z_h\|\le\alpha_*^{-1}\{M_a(\delta_u+R_h)+M_b\delta_p\}$; if $z_h=0$ this bound is immediate. Therefore $\|u-u_h\|\le\|\eta_u\|+\|z_h\|+\|r_u\|\le U_h$. [given, step 2.1, step 3.1]

5.1 Since $\theta_u+\eta_u=u-u_h$, the first identity of step 2.1 gives $b(v_h,\theta_p)=-a(u-u_h,v_h)-b(v_h,\eta_p)$. Therefore $|b(v_h,\theta_p)|\le[M_aU_h+M_b\delta_p]\|v_h\|$ by step 4.1. Taking the supremum and applying the discrete inf-sup yields $\|\theta_p\|\le\beta_h^{-1}(M_aU_h+M_b\delta_p)\le\beta_h^{-1}\{M_a(U_h+\delta_u)+M_b\delta_p\}$. Hence $\|p-p_h\|\le\delta_p+\|\theta_p\|\le P_h$. [A1, F2, algebra, step 2.1, step 4.1] ∎
