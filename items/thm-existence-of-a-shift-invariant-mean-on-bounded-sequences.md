---
id: thm-existence-of-a-shift-invariant-mean-on-bounded-sequences
kind: theorem
title: "Existence of a shift-invariant mean on bounded sequences"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-hahn-banach-dominated-extension, def-c-zero-and-ell-infinity, def-cesaro-mean, def-sublinear-functional, def-limsup-liminf, thm-limsup-subadditive]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Problem 4.20"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Problem 4.20, Banach-limit construction by Hahn--Banach"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. There exists a positive real-linear functional
$L:\ell^\infty(\mathbb N;\mathbb R)\to\mathbb R$ such that

$$L(\mathbf1)=1,\qquad \|L\|=1,\qquad L(Sx)=L(x),$$

where $(Sx)_n=x_{n+1}$. Moreover $L(x)=\lim_nx_n$ whenever the ordinary limit
exists.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] Under AC, a real linear functional dominated by a sublinear functional on
a subspace extends, with the domination preserved
([[thm-hahn-banach-dominated-extension]]).

[L2] Cesaro means are finite averages ([[def-cesaro-mean]]), and limsup is
subadditive ([[thm-limsup-subadditive]]).

[L3] A sublinear functional is positively homogeneous and subadditive
([[def-sublinear-functional]]); bounded real sequences form real
$\ell^\infty$ ([[def-c-zero-and-ell-infinity]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 For $x\in\ell^\infty$ define [given, L2, L3]
$p(x)=\limsup_N\frac1{N+1}\sum_{n=0}^Nx_n$. This is finite because $x$ is
bounded. Linearity of finite averages, positive homogeneity of limsup, and [L2]
show that $p$ is sublinear in the sense of [L3]. [L2, L3, definition]

2.1 Let $c$ be the subspace of ordinarily convergent sequences and let [given, L1, A1, step 1.1]
$f(x)=\lim_nx_n$ on $c$. Cesaro means preserve an ordinary limit, so
$f(x)=p(x)$ on $c$; in particular $f\le p$. Apply [L1]. The exact non-finite
choice use is [A1] in Hahn--Banach, producing a real-linear extension $L$ with
$L(x)\le p(x)$ for every $x$. [A1, L1, step 1.1, Cesaro convergence]

3.1 If $x_n\ge0$, then $p(-x)\le0$, hence [given, step 2.1]
$-L(x)=L(-x)\le p(-x)\le0$; thus $L$ is positive. Since $\mathbf1\in c$,
$L(\mathbf1)=1$. Positivity applied to
$\|x\|_\infty\mathbf1\pm x$ gives $|L(x)|\le\|x\|_\infty$, while
$L(\mathbf1)=1$ gives the reverse norm bound. Therefore $\|L\|=1$.
[step 2.1, positivity]

4.1 The Cesaro average of $x-Sx$ equals [given, step 2.1, step 1.1, step 3.1]
$(x_0-x_{N+1})/(N+1)$ and tends to zero; the same is true of $Sx-x$.
Therefore $p(x-Sx)=p(Sx-x)=0$. Domination gives
$L(x-Sx)\le0$ and $-L(x-Sx)=L(Sx-x)\le0$, so $L(x-Sx)=0$ and
$L(Sx)=L(x)$. On the original subspace $c$, step 2.1 already says that $L$
extends the ordinary limit. [step 1.1, step 2.1, telescoping]
∎
