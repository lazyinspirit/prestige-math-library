---
id: thm-bounded-right-inverse-for-the-sobolev-trace
kind: theorem
title: "A bounded right inverse of the trace, supported in a prescribed collar"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-sharp-trace-theorem-for-w-one-p, thm-half-space-lift-by-normal-mollification, def-fractional-sobolev-space-on-a-compact-c-one-boundary, lem-fractional-boundary-norm-is-independent-of-atlas, lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts, lem-sobolev-pasting-across-an-overlap, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-c-k-boundary-flattening-preserves-wkp-locally, thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces, def-axiom-of-choice, lem-weak-leibniz-rule-with-a-smooth-factor]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-4.md"
      - "research/frontier-38-owner-30-alpha-batch-4-5a.md"
      - "research/frontier-38-owner-30-step5-hash-4-post-5a.json"
    content_sha256: "f7d15bbda306e2ec40e6af15d1621db889756dd48e7c2455b1526223cbb0a6b8"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teorema [1.I], second half, printed p. 289: for $p>1$ every boundary function in the trace space is attained by a $W^{1,p}$ function with the stated norm bound."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorem 3.3 and Theorem 3.5, printed pp. 23-31: the lift and its patching on $C^l$ domains."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.2, printed pp. 98-101: scaled lifts on the half-space as the local model."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain, $1<p<\infty$, $\theta=1-1/p$, and let $T$ be the trace
operator of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]. Then there is
a bounded linear operator
$$R:W^{\theta,p}(\partial\Omega;\mathbb K)\longrightarrow W^{1,p}(\Omega;\mathbb K)$$
with $T\circ R=\mathrm{id}_{W^{\theta,p}(\partial\Omega)}$ and
$\|Rg\|_{W^{1,p}(\Omega)}\le C(\Omega,p)\|g\|_{W^{\theta,p}(\partial\Omega)}$.
Moreover, for every open neighbourhood $U$ of $\partial\Omega$ in
$\mathbb R^n$ there is such an operator $R_U$ whose image is contained in the
classes vanishing a.e. outside $U$, with
$\|R_Ug\|_{W^{1,p}(\Omega)}\le C(\Omega,p,U)\|g\|_{W^{\theta,p}(\partial\Omega)}$.
The right inverse is not unique and no canonical choice is claimed.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$; $1<p<\infty$; $\theta=1-1/p$; the boundary space of [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]; the trace $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]; and an open neighbourhood $U$ of $\partial\Omega$.

[F1] The flat trace $T_+$ has a bounded linear right inverse $R_+$ with $T_+\circ R_+=\mathrm{id}$ on $W^{\theta,p}(\mathbb R^{n-1})$ and $\|R_+h\|_{W^{1,p}(H)}\le C\|h\|_{W^{\theta,p}(\mathbb R^{n-1})}$. ([[thm-half-space-lift-by-normal-mollification]])

[F2] $T(\eta u)=(\eta|_{\partial\Omega})Tu$ for smooth cutoffs; on chart-supported classes $T$ is the transported flat trace; and the boundary norm is computed by finite chart representations with equivalent norms for any atlas. ([[lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]], [[lem-fractional-boundary-norm-is-independent-of-atlas]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]])

[F3] Composition with a flattening chart is bounded between the local $W^{1,p}$ spaces in both directions, and multiplication by an ambient smooth cutoff is bounded on $W^{1,p}$. ([[lem-c-k-boundary-flattening-preserves-wkp-locally]], [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]], [[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F4] A finite family of open sets covering $\partial\Omega$ admits a subordinate finite ambient partition of unity, and the partition can be chosen with supports inside any prescribed open neighbourhood of $\partial\Omega$. ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]])

[F5] $W^{1,p}(\Omega)$ is a vector space with the triangle inequality for its norm, and $T$ is linear. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[lem-sobolev-pasting-across-an-overlap]])

## Proof

**Proof technique:** direct.

1.1 Construction inside a prescribed collar. Let $U$ be an open neighbourhood of the compact boundary. Choose a finite boundary atlas $\{(\Phi_j,W_j)\}$ with $W_j\subseteq U$ (shrinking the chart neighbourhoods of the boundary, which is possible because $U$ is open and contains $\partial\Omega$) and a subordinate finite ambient partition $\{\rho_j\}$ with $\operatorname{supp}\rho_j\subseteq W_j$ and $\sum_j\rho_j=1$ on a neighbourhood of $\partial\Omega$, by [F4]. For $g\in W^{\theta,p}(\partial\Omega)$ and each $j$, transport the localised datum: $g_j:=(\rho_jg)\circ\Psi_j^{-1}\in W^{\theta,p}(\mathbb R^{n-1})$; lift it flat, $w_j:=R_+g_j$, so that $T_+w_j=g_j$ and $\|w_j\|\le C\|g_j\|$ by [F1]; then transport back through the chart and multiply by a fixed cutoff equal to $1$ on a neighbourhood of $\operatorname{supp}\rho_j$ and supported in $W_j\cap U$. The result $u_j$ is a class in $W^{1,p}(\Omega)$ with support in $U$ and $\|u_j\|_{W^{1,p}(\Omega)}\le C_j\|g_j\|_{W^{\theta,p}(\mathbb R^{n-1})}$ by [F3]. [F1, F3, F4, given]

2.1 The traces of the pieces. By the chart-transport and multiplicativity parts of [F2], applied to the flattened piece and its cutoff, $Tu_j=(\rho_j|_{\partial\Omega})g=\rho_jg$ on $\partial\Omega$: the transported flat lift has flat trace $g_j$, and multiplication by the cutoff, which equals one near the support of $\rho_j$ on the boundary, leaves the localised datum unchanged. [F2, step 1.1, algebra]

3.1 The operator $R_U$. Define $R_Ug:=\sum_ju_j$. This is linear in $g$ (every construction is linear), its image is contained in the classes supported in $\bigcup_jW_j\subseteq U$, and $\|R_Ug\|_{W^{1,p}(\Omega)}\le\sum_j\|u_j\|\le C(\Omega,p,U)\|g\|_{W^{\theta,p}(\partial\Omega)}$ by [F5], the atlas-independence of [F2] and step 1.1. Its trace is $T(R_Ug)=\sum_jTu_j=\sum_j\rho_jg=g$ by step 2.1 and linearity of $T$. [F2, F5, step 1.1, step 2.1, algebra]

4.1 Conclusion and non-uniqueness. Taking $U=\mathbb R^n$ gives $R$, and the construction for general $U$ gives $R_U$ with the claimed dependence of its bound. To exhibit distinct right inverses, fix a nonzero $v\in C_c^\infty(\Omega)$ and the bounded nonzero linear functional $\ell(g)=\int_{\partial\Omega}g\,dS$ on the boundary space (Hölder and its $L^p$ term give boundedness). Since $Tv=0$ by classical restriction, $\widetilde Rg=Rg+\ell(g)v$ is another bounded linear right inverse, distinct from $R$. For the collar version choose $v\in C_c^\infty(\Omega\cap U)$; this open set is nonempty since $U$ contains the boundary. No canonical choice is claimed. [F2, F5, step 3.1, algebra, given] ∎

## Source notes

Gagliardo's second half of Teorema [1.I] (printed p. 289) gives the norm bound for the extension of a boundary function in the trace space; Kampanou's Theorems 3.3 and 3.5 (printed pp. 23-31) patch the local lifts on $C^l$ domains, and Schikorra's Section V.2 (printed pp. 98-101) is the flat model. The proof above keeps the localisation explicit so that the image can be confined to a prescribed collar, which is the property later pages use.
