---
id: def-absolute-continuity-on-almost-every-coordinate-line
kind: definition
title: Absolute continuity on almost every coordinate line
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, def-absolutely-continuous-function, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 2 §2.6
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Theorem 2.36 (Nikodym, ACL characterization), statement printed p. 55 and proof pp. 56–59
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §3.A.2, Definition 3.56, printed pp. 78–79, for absolute continuity on compact intervals
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6, Theorem 2.36 (Nikodym,
  ACL characterization), statement printed p. 55 and proof pp. 56–59. The
  theorem uses one representative for all coordinate directions and proves
  its linewise absolute continuity by summable smooth approximations and
  Fubini. This definition records that representative property on a countable
  rational-box basis; it does not assert the characterization theorem.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3
  §3.A.2, Definition 3.56, printed pp. 78–79, for absolute continuity on a
  compact interval.

## Definition

Assume Countable Choice for the library's completed-product Fubini convention
([[def-countable-choice]]).
Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. Let $u$ be an almost-everywhere
class of Lebesgue-measurable maps $\Omega\to\mathbb K$; in particular, this
includes the classes used in $W^{k,p}(\Omega;\mathbb K)$ under
[[def-sobolev-space-wkp-and-its-norm]].

Let $\mathcal Q(\Omega)$ be the countable family of open rational coordinate
boxes
$$Q=\prod_{j=1}^n(a_j,b_j),\qquad a_j,b_j\in\mathbb Q,\quad a_j<b_j,\quad \overline Q\subseteq\Omega.$$
These boxes cover $\Omega$, since each point of an open set lies in a rational
coordinate box whose closure remains in that set. For $n\ge2$ and $1\le i\le n$, write
$$Q_{\widehat i}=\prod_{j\ne i}(a_j,b_j),\qquad I_{i,Q}=(a_i,b_i),$$
and let $\iota_i(y,t)$ insert $t$ as the $i$th coordinate into the ordered
list $y$ of the other $n-1$ coordinates.

A measurable representative $u^*:\Omega\to\mathbb K$ is **absolutely
continuous on almost every coordinate line** (ACL) if the following holds. For
$n\ge2$, for every coordinate direction $i$ there is a set
$N_i\subseteq\mathbb R^{n-1}$ null for $(n-1)$-dimensional Lebesgue measure
such that for every $Q\in\mathcal Q(\Omega)$ and every
$y\in Q_{\widehat i}\setminus N_i$, the function
$$t\longmapsto u^*(\iota_i(y,t))$$
is absolutely continuous in the sense of [[def-absolutely-continuous-function]] on every compact interval contained in $I_{i,Q}$.
For complex-valued functions, absolute continuity means that the real and
imaginary parts are both absolutely continuous. The exceptional set $N_i$ may
depend on $i$. For $n=1$, there is one coordinate line and the condition is
that $u^*$ is absolutely continuous on every compact interval contained in
$\Omega$.

The a.e. class $u$ **has an ACL representative** if one globally defined
measurable representative $u^*$ satisfies this property for all coordinate
directions simultaneously. The zero class has the representative $u^*=0$; its
line restrictions are constant and hence ACL. The representative is common to all directions;
only the exceptional line sets may differ. The rational boxes give a
countable local basis. Equivalently, one may start with a null exceptional
set for each direction and box and take their countable union; Countable
Choice is sufficient for that step. The completed-product measure convention [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]] identifies $\lambda_n$ with the completed product used by [[thm-tonelli-and-fubini-for-completed-product-measures]] whenever sectional integrals are taken.

If $\Omega=\varnothing$, its unique a.e. class has the empty representative
and is ACL vacuously. No boundary values or traces at $\partial\Omega$ are
part of this definition.
