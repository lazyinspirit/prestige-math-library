---
id: cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace
kind: corollary
title: "Inhomogeneous Dirichlet data reduce to zero trace"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-bounded-right-inverse-for-the-sobolev-trace, thm-kernel-of-the-trace-is-w-one-p-zero, thm-sharp-trace-theorem-for-w-one-p, def-wkp-zero-as-a-sobolev-closure, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teorema [1.I], printed p. 289: the range of the trace is exactly the boundary space, so data outside it are not attained."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Lemmas 9.20-9.21, printed p. 210: decomposition of a function with prescribed trace by subtracting a lift with controlled zero-trace remainder."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorems 3.3 and 3.5, printed pp. 23-31: existence of the extension used in the reduction."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a
bounded $C^1$ domain, $1<p<\infty$, $\theta=1-1/p$, and let $R$ be the bounded
right inverse of [[thm-bounded-right-inverse-for-the-sobolev-trace]]. Then for
every $g\in W^{\theta,p}(\partial\Omega)$ and every
$u\in W^{1,p}(\Omega)$ with $Tu=g$ one has
$$u=Rg+v,\qquad v\in W_0^{1,p}(\Omega),$$
and conversely every $u=Rg+v$ with $v\in W_0^{1,p}(\Omega)$ has trace $g$. If
$g_0\in L^p(\partial\Omega)\setminus W^{\theta,p}(\partial\Omega)$, a set
nonempty for $p>1$, then no $u\in W^{1,p}(\Omega)$ satisfies $Tu=g_0$: the
inhomogeneous problem is solvable exactly for data in the trace range, not for
arbitrary boundary $L^p$ data.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega$; $1<p<\infty$; $\theta=1-1/p$; a bounded right inverse $R:W^{\theta,p}(\partial\Omega)\to W^{1,p}(\Omega)$ of the trace with $T\circ R=\mathrm{id}$; and the identification $\{Tu=0\}=W_0^{1,p}(\Omega)$.

[F1] $T\circ R=\mathrm{id}$ on $W^{\theta,p}(\partial\Omega)$: $T(Rg)=g$ for every boundary datum $g$, and $R$ is linear and bounded. ([[thm-bounded-right-inverse-for-the-sobolev-trace]])

[F2] The kernel of the trace is exactly $W_0^{1,p}(\Omega)$, the $W^{1,p}$-closure of $C_c^\infty(\Omega)$. ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]])

[F3] $T$ is linear, $T(W^{1,p}(\Omega))=W^{\theta,p}(\partial\Omega)$, and the range is a strict subset of $L^p(\partial\Omega)$ for $p>1$. ([[thm-sharp-trace-theorem-for-w-one-p]])

## Proof

**Proof technique:** direct.

1.1 The decomposition and its converse. Let $g\in W^{\theta,p}(\partial\Omega)$ and $u\in W^{1,p}(\Omega)$ with $Tu=g$. By linearity of $T$ and [F1], $T(u-Rg)=Tu-T(Rg)=g-g=0$, so $v:=u-Rg$ lies in the kernel of $T$, which equals $W_0^{1,p}(\Omega)$ by [F2]; this gives $u=Rg+v$ with $v\in W_0^{1,p}(\Omega)$. Conversely, if $u=Rg+v$ with $v\in W_0^{1,p}(\Omega)$, then $Tu=T(Rg)+Tv=g+0=g$ by [F1], [F2] and linearity. [F1, F2, algebra]

1.2 Data outside the range are not attained. By [F3] the range of $T$ is exactly $W^{\theta,p}(\partial\Omega)$ and is a strict subset of $L^p(\partial\Omega)$ for $p>1$, so the set $L^p(\partial\Omega)\setminus W^{\theta,p}(\partial\Omega)$ is nonempty and no $u\in W^{1,p}(\Omega)$ has trace equal to an element of it. [F3, algebra]

2.1 Conclusion. Step 1.1 proves that the inhomogeneous problem with datum $g$ reduces to the zero-trace problem with remainder $v=u-Rg$, and that conversely every $g$ in the range is attained by $Rg+W_0^{1,p}(\Omega)$; step 1.2 shows that data outside the range are not attained at all. This is exactly the asserted statement. [step 1.1, step 1.2, algebra, given] ∎

## Source notes

Gagliardo's Teorema [1.I] (printed p. 289) identifies the range exactly, so
data outside it are not attained; Teschl's Lemmas 9.20-9.21 (printed p. 210)
record the reduction of a prescribed trace to a zero-trace remainder, and
Kampanou's Theorems 3.3 and 3.5 (printed pp. 23-31) supply the extension used
in the reduction. The corollary keeps the two directions separate: existence
for data in the range, and non-attainment outside it.
