---
id: thm-argument-principle-null-homologous-cycle
kind: theorem
title: "The argument principle for an admissible null-homologous cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-logarithmic-derivative-meromorphic-function,
       def-weighted-zero-and-pole-counts-on-cycle,
       lem-logarithmic-derivative-order-residue,
       lem-finiteness-support-residue-sum,
       thm-residue-theorem-null-homologous-cycle]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7, Theorem 8.7.2"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4, Theorem 5.4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$, and
let $\Gamma$ be admissible for the residue theorem in $\Omega$. Suppose in
addition that $f$ is not identically zero on any connected component of
$\Omega$ and that $f(z)\ne0$ for every $z\in\Gamma^\ast$. Then

$$\frac{1}{2\pi i}\int_\Gamma \frac{f'(z)}{f(z)}\,dz=Z(f,\Gamma)-P(f,\Gamma),$$

where the weighted zero and pole counts are those of
[[def-weighted-zero-and-pole-counts-on-cycle]].

Only finitely many terms in those weighted counts are nonzero.

As in [[def-weighted-zero-and-pole-counts-on-cycle]], meromorphicity on the
possibly disconnected open set $\Omega$ is understood componentwise.

## Facts & Assumptions

**Given:** An open set $\Omega$, a meromorphic function $f$ on $\Omega$ that is
not identically zero on any connected component, and an admissible cycle
$\Gamma$ in $\Omega$ such that $f$ has no zero on $\Gamma^\ast$.

[L1] Away from the zeros and poles of $f$, the logarithmic derivative $f'/f$ is
holomorphic ([[def-logarithmic-derivative-meromorphic-function]]).

[L2] At a zero of order $m$, the logarithmic derivative has residue $m$, and at
a pole of order $m$ it has residue $-m$
([[lem-logarithmic-derivative-order-residue]]).

[L3] A meromorphic function admissible for a cycle has only finitely many poles
with nonzero index ([[lem-finiteness-support-residue-sum]]).

[L4] The residue theorem for an admissible null-homologous cycle reads
$$\int_\Gamma g(z)\,dz=2\pi i\sum_c n(\Gamma,c)\operatorname{Res}(g,c)$$
with only finitely many nonzero terms
([[thm-residue-theorem-null-homologous-cycle]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the function $g:=f'/f$ is holomorphic away from the zeros and poles of $f$. By [L2], every zero or pole of $f$ becomes a simple pole of $g$. Because $f$ has neither zeros nor poles on $\Gamma^\ast$, the cycle $\Gamma$ is admissible for $g$ as well. [given, L1, L2]

2.1 Applying [L3] to $g$ shows that only finitely many zeros or poles of $f$ have nonzero index with respect to $\Gamma$. Therefore the sums defining $Z(f,\Gamma)$ and $P(f,\Gamma)$ are finite. [step 1.1, L3]

3.1 By [L4] applied to $g$, $$\frac{1}{2\pi i}\int_\Gamma \frac{f'(z)}{f(z)}\,dz=\sum_c n(\Gamma,c)\operatorname{Res}\!\left(\frac{f'}{f},c\right),$$ where $c$ ranges over the poles of $g$. Splitting those poles into zeros and poles of $f$ and then using [L2] turns the right-hand side into $Z(f,\Gamma)-P(f,\Gamma)$. [step 1.1, step 2.1, L2, L4] ∎
