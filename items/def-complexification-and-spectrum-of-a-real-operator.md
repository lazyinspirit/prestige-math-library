---
id: def-complexification-and-spectrum-of-a-real-operator
kind: definition
title: Complexification and spectrum of a real operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-bounded-linear-operator, lem-canonical-banach-complexification-of-a-real-banach-space, def-spectrum-and-resolvent-set-in-a-banach-algebra, def-spectral-radius]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Exercise 5.4 and §5.2.1, printed pp. 209–213 and 219–222"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.1 and §2.3, printed pp. 19–24 and 30–33"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Definition

Let $X$ be a nonzero real Banach space and let $T : X \to X$ be a bounded real-linear
operator ([[def-bounded-linear-operator]]). Let
$X_{\mathbb C} = X \times X$ be the canonical complexification with the
rotation-supremum norm $\rho$ and let
$T_{\mathbb C}(x,y) := (Tx,Ty)$ be the complex-linear extension, both from
[[lem-canonical-banach-complexification-of-a-real-banach-space]]; thus
$T_{\mathbb C} \in \mathcal B(X_{\mathbb C})$ with
$\|T_{\mathbb C}\| = \|T\|$. The **spectrum**, **resolvent set**, **resolvent**
and **spectral radius of the real operator $T$** are those of $T_{\mathbb C}$
computed in the unital Banach algebra $\mathcal B(X_{\mathbb C})$:

$$\sigma(T) := \sigma_{\mathcal B(X_{\mathbb C})}(T_{\mathbb C}), \qquad \rho(T) := \mathbb C \setminus \sigma(T), \qquad R(z,T) := (z1 - T_{\mathbb C})^{-1} \quad (z \in \rho(T)), \qquad r(T) := r(T_{\mathbb C}),$$

with the conventions of [[def-spectrum-and-resolvent-set-in-a-banach-algebra]]
and [[def-spectral-radius]].

**Well-definedness (independence of the complexification model).** Let $Z$ be
another compatible complexification of $X$ in the sense of claim 3 of
[[lem-canonical-banach-complexification-of-a-real-banach-space]]: a complex
Banach space with a real-linear isometric embedding $j_Z : X \to Z$ such that
$Z = j_Z(X) \oplus ij_Z(X)$, an isometric conjugation $\sigma_Z$, and let
$T_Z(j_Z(x) + ij_Z(y)) := j_Z(Tx) + ij_Z(Ty)$ be the corresponding extension of
$T$. By that lemma the map $\Phi : X_{\mathbb C} \to Z$,
$\Phi(x,y) = j_Z(x) + ij_Z(y)$, is a bounded complex-linear bijection with
bounded inverse $\Phi^{-1}$, and $\Phi\,T_{\mathbb C}\,\Phi^{-1} = T_Z$. Hence
for every $z \in \mathbb C$

$$z1 - T_Z \;=\; \Phi\,(z1 - T_{\mathbb C})\,\Phi^{-1},$$

so $z1 - T_Z$ is invertible in $\mathcal B(Z)$ exactly when
$z1 - T_{\mathbb C}$ is invertible in $\mathcal B(X_{\mathbb C})$, with
$(z1-T_Z)^{-1} = \Phi(z1-T_{\mathbb C})^{-1}\Phi^{-1}$. Taking spectra,

$$\sigma_{\mathcal B(Z)}(T_Z) = \sigma_{\mathcal B(X_{\mathbb C})}(T_{\mathbb C}), \qquad r(T_Z) = r(T_{\mathbb C}),$$

because the bijection $z \mapsto z$ matches the two spectral sets and preserves
moduli. So the spectrum and the spectral radius of a real operator do not depend
on which compatible complexification computes them, and all of them are
computed below in the canonical model.

## Remarks

- **Why not "real $\lambda$ with $\lambda I - T$ not invertible".** Restricting
  the discussion to real scalars would discard the genuinely complex part of
  the spectrum: a real rotation matrix in the plane has no real eigenvalue but
  has the two nonreal spectral values $\pm i$. The definition above computes
  the spectrum of the complex-linear extension, which is the convention used by
  the surrounding theory; for $T$ with a complexification that happens to be a
  real Banach space regarded over $\mathbb C$, the two notions do agree.

- **The operator is bounded by hypothesis.** The same-norm extension statement
  of the complexification lemma is used only for bounded real-linear $T$; it is
  what makes $T_{\mathbb C}$ an element of the Banach algebra
  $\mathcal B(X_{\mathbb C})$, to which the spectral theory of this page
  applies. For unbounded real operators no spectrum in this sense is defined
  here.

- **$z \mapsto R(z,T)$ is a holomorphic $\mathcal B(Z)$-valued map on
  $\rho(T)$** by [[thm-resolvent-is-banach-valued-holomorphic]], applied in
  whichever model is used; the comparison isomorphism above conjugates one
  resolvent map into the other. In particular the resolvent of a real operator
  is well defined at a point $z \in \mathbb C$ exactly when
  $z \notin \sigma(T)$.
