---
id: lem-nrqm-photons-analyzer-projections-and-overlaps
kind: lemma
title: "Analyzer projections of a two-dimensional polarisation space and their overlaps"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-real-and-complex-inner-product-space, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive]
dependency_roles:
  def-real-and-complex-inner-product-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3.6 printed pages 14-15 (PDF pages 22-23): photon polarisation, the transmitting and blocking states, the amplitudes cos(theta) and sin(theta) and the transmitted fraction cos^2(theta)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.3 printed pages 19-25 (PDF pages 31-37): the projection theorem, orthonormal bases and the expansion of a vector in an orthonormal basis"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Let $V$ be a two-dimensional complex inner product space with inner product
linear in the first argument ([[def-inner-product-space]],
[[def-real-and-complex-inner-product-space]]), and let $(e_{1},e_{2})$ be an
orthonormal basis of $V$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).
For $\theta\in\mathbb R$ put
$$e_{\theta}:=\cos\theta\,e_{1}+\sin\theta\,e_{2},\qquad e_{\theta}^{\perp}:=-\sin\theta\,e_{1}+\cos\theta\,e_{2},$$
and for $x\in V$ define
$$P_{\theta}x:=\langle x,e_{\theta}\rangle\,e_{\theta},\qquad P_{\theta}^{\perp}x:=\langle x,e_{\theta}^{\perp}\rangle\,e_{\theta}^{\perp}.$$
Then:

(a) for every $\theta$ the maps $P_{\theta}$ and $P_{\theta}^{\perp}$ are
orthogonal projections on $V$ with ranges $\mathbb Ce_{\theta}$ and
$\mathbb Ce_{\theta}^{\perp}$ ([[def-hilbert-orthogonal-projection]],
[[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]), one has
$P_{\theta}+P_{\theta}^{\perp}=I$ and $P_{\theta}P_{\theta}^{\perp}=0$, and
$$P_{\theta}P_{\theta}=P_{\theta}=P_{\theta}^{*},\qquad P_{\theta}P_{\theta}^{\perp}=P_{\theta}^{\perp}P_{\theta}=0;$$

(b) for all real $\varphi,\theta$ the unit vectors
$\psi_{\varphi}:=\cos\varphi\,e_{1}+\sin\varphi\,e_{2}$ satisfy
$$\langle e_{\theta},\psi_{\varphi}\rangle=\cos(\theta-\varphi),\qquad \langle\psi_{\varphi},P_{\theta}\psi_{\varphi}\rangle=\|P_{\theta}\psi_{\varphi}\|^{2}=|\langle e_{\theta},\psi_{\varphi}\rangle|^{2}=\cos^{2}(\theta-\varphi),$$
and $\langle\psi_{\varphi},P_{\theta}^{\perp}\psi_{\varphi}\rangle=\sin^{2}(\theta-\varphi)$;

(c) the assignments $\theta\mapsto P_{\theta}$ and $\theta\mapsto
P_{\theta}^{\perp}$ are $2\pi$-periodic, $P_{\theta+\pi}=P_{\theta}$ and
$P_{\theta+\pi/2}=P_{\theta}^{\perp}$, and for every $z\in\mathbb C$ and
$x\in V$ one has $P_{\theta}(zx)=zP_{\theta}x$ and
$\|P_{\theta}(z\psi_{\varphi})\|^{2}/\|z\psi_{\varphi}\|^{2}=\cos^{2}(\theta-\varphi)$
whenever $z\ne0$; in particular the number $\cos^{2}(\theta-\varphi)$ depends
only on the ray $[\psi_{\varphi}]$, not on the representative;

(d) the pair $(P_{\theta},P_{\theta}^{\perp})$ is a two-element family of
mutually orthogonal projections on $V$ with $P_{\theta}+P_{\theta}^{\perp}=I$,
its outcomes $+1$ and $-1$ have spectral projections $P_{\theta}$ and
$P_{\theta}^{\perp}$ for the bounded self-adjoint operator $P_{\theta}$ in the
sense that the eigenspace of $P_{\theta}$ at eigenvalue $1$ is
$\mathbb Ce_{\theta}$ and the eigenspace at eigenvalue $0$ is
$\mathbb Ce_{\theta}^{\perp}$.

No physical interpretation of $V$, of the pair $(e_{1},e_{2})$ or of the
projections $P_{\theta}$ is asserted.

## Facts & Assumptions

**Given:** the two-dimensional complex inner product space $V$ with inner product linear in the first argument, the orthonormal basis $(e_{1},e_{2})$ of $V$, the vectors $e_{\theta},e_{\theta}^{\perp},\psi_{\varphi}\in V$ and the maps $P_{\theta},P_{\theta}^{\perp}:V\to V$.

[F1] **Inner product and norm.** For all $x,y\in V$ and $a,b\in\mathbb C$, $\langle ax+by,z\rangle=a\langle x,z\rangle+b\langle y,z\rangle$ and $\langle x,ay+bz\rangle=\overline a\langle x,y\rangle+\overline b\langle x,z\rangle$; $\langle x,x\rangle\ge0$ with equality only for $x=0$; and $\|x\|^{2}=\langle x,x\rangle$ ([[def-inner-product-space]], [[def-real-and-complex-inner-product-space]]).

[F2] **Orthonormality.** $\langle e_{i},e_{j}\rangle=\delta_{ij}$ for $i,j\in\{1,2\}$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] **Expansion in an orthonormal basis.** Since $(e_{1},e_{2})$ is a complete orthonormal family of the two-dimensional space $V$, every $x\in V$ satisfies $x=\langle x,e_{1}\rangle e_{1}+\langle x,e_{2}\rangle e_{2}$ and $\|x\|^{2}=|\langle x,e_{1}\rangle|^{2}+|\langle x,e_{2}\rangle|^{2}$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F4] **Orthogonal projections.** A bounded linear map $P:V\to V$ with $P^{2}=P=P^{*}$ is the orthogonal projection onto its range, its range is a closed subspace, and $\|Px\|\le\|x\|$ ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

## Proof

**Proof technique:** direct; compute the overlaps of the displayed vectors from the orthonormality of $(e_{1},e_{2})$ and verify the projection identities.

**Given:** The data of the statement and [F1]-[F4].

1.1 [The rotated pairs are orthonormal] By [F1] and [F2], $\langle e_{\theta},e_{\theta}\rangle=\cos^{2}\theta+\sin^{2}\theta=1$, $\langle e_{\theta}^{\perp},e_{\theta}^{\perp}\rangle=\sin^{2}\theta+\cos^{2}\theta=1$ and $\langle e_{\theta},e_{\theta}^{\perp}\rangle=-\cos\theta\sin\theta+\sin\theta\cos\theta=0$; hence $(e_{\theta},e_{\theta}^{\perp})$ is an orthonormal family of the two-dimensional space $V$, therefore an orthonormal basis of $V$. [F1, F2, algebra]

1.2 [Overlaps and the cosine identity] By [F1] and [F2], $\langle e_{\theta},\psi_{\varphi}\rangle=\cos\theta\cos\varphi+\sin\theta\sin\varphi=\cos(\theta-\varphi)$ and $\langle e_{\theta}^{\perp},\psi_{\varphi}\rangle=-\sin\theta\cos\varphi+\cos\theta\sin\varphi=\sin(\varphi-\theta)$. Then $\langle\psi_{\varphi},P_{\theta}\psi_{\varphi}\rangle=\langle\psi_{\varphi},\langle\psi_{\varphi},e_{\theta}\rangle e_{\theta}\rangle=|\langle\psi_{\varphi},e_{\theta}\rangle|^{2}=\cos^{2}(\theta-\varphi)$ because $\cos(\theta-\varphi)$ is real, and $\|P_{\theta}\psi_{\varphi}\|^{2}=|\cos(\theta-\varphi)|^{2}\|e_{\theta}\|^{2}=\cos^{2}(\theta-\varphi)$; similarly $\langle\psi_{\varphi},P_{\theta}^{\perp}\psi_{\varphi}\rangle=\sin^{2}(\theta-\varphi)$. This is (b). [F1, F2, algebra]

2.1 [The projections are orthogonal projections] For $x\in V$, $P_{\theta}x=\langle x,e_{\theta}\rangle e_{\theta}$, so $P_{\theta}(P_{\theta}x)=\langle\langle x,e_{\theta}\rangle e_{\theta},e_{\theta}\rangle e_{\theta}=\langle x,e_{\theta}\rangle\langle e_{\theta},e_{\theta}\rangle e_{\theta}=P_{\theta}x$ by [F1] and step 1.1: $P_{\theta}^{2}=P_{\theta}$. For the adjoint, $\langle P_{\theta}x,y\rangle=\langle\langle x,e_{\theta}\rangle e_{\theta},y\rangle=\langle x,e_{\theta}\rangle\langle e_{\theta},y\rangle=\langle x,\langle y,e_{\theta}\rangle e_{\theta}\rangle=\langle x,P_{\theta}y\rangle$ for all $x,y$, so $P_{\theta}^{*}=P_{\theta}$; the same computation with $e_{\theta}^{\perp}$ in place of $e_{\theta}$ gives $P_{\theta}^{\perp\,2}=P_{\theta}^{\perp}=P_{\theta}^{\perp\,*}$. By [F4] both are the orthogonal projections onto their ranges $\mathbb Ce_{\theta}$ and $\mathbb Ce_{\theta}^{\perp}$. [F1, step 1.1, F4, algebra]

3.1 [Complementarity] By step 1.1 and [F3] applied to the orthonormal basis $(e_{\theta},e_{\theta}^{\perp})$, every $x\in V$ satisfies $x=\langle x,e_{\theta}\rangle e_{\theta}+\langle x,e_{\theta}^{\perp}\rangle e_{\theta}^{\perp}=P_{\theta}x+P_{\theta}^{\perp}x$; hence $P_{\theta}+P_{\theta}^{\perp}=I$. Applying $P_{\theta}$ to the same expansion and using $P_{\theta}e_{\theta}^{\perp}=\langle e_{\theta}^{\perp},e_{\theta}\rangle e_{\theta}=0$ gives $P_{\theta}P_{\theta}^{\perp}=0$, and likewise $P_{\theta}^{\perp}P_{\theta}=0$. Since $P_{\theta}=I-P_{\theta}^{\perp}$ and $\mathbb Ce_{\theta}\cap\mathbb Ce_{\theta}^{\perp}=\{0\}$ by orthogonality of the nonzero vectors $e_{\theta},e_{\theta}^{\perp}$, the eigenspace of $P_{\theta}$ at eigenvalue $1$ is $\mathbb Ce_{\theta}$ and at eigenvalue $0$ is $\mathbb Ce_{\theta}^{\perp}$; this proves (a) and (d). [F1, F3, step 1.1, step 2.1, algebra]

4.1 [Periodicity and phase invariance] Since $e_{\theta+\pi}=-e_{\theta}$ and $e_{\theta+\pi/2}=e_{\theta}^{\perp}$, the identities $P_{\theta+\pi}=P_{\theta}$ and $P_{\theta+\pi/2}=P_{\theta}^{\perp}$ follow from the definition of $P_{\theta}$ and [F1]; in particular $P_{\theta}$ is $2\pi$-periodic. For $z\ne0$ and the unit vector $\psi_{\varphi}$ one has $\|z\psi_{\varphi}\|^{2}=|z|^{2}$, and $P_{\theta}(z\psi_{\varphi})=zP_{\theta}\psi_{\varphi}$ by linearity of $x\mapsto\langle x,e_{\theta}\rangle$ in the first argument of [F1]; hence $\|P_{\theta}(z\psi_{\varphi})\|^{2}/\|z\psi_{\varphi}\|^{2}=\|P_{\theta}\psi_{\varphi}\|^{2}=\cos^{2}(\theta-\varphi)$ by step 1.2. This proves (c) and completes the proof. [F1, step 1.2, algebra] ∎

## Remarks

- **What the lemma is not.** The lemma is finite-dimensional linear algebra:
  no dynamics, no measurement postulate and no physical identification of
  $e_{\theta}$ with an apparatus direction is asserted. The physical reading of
  the projections as the outcome structure of a polarisation analyser is fixed
  in [[def-nrqm-photons-framework-fixed-mode-polarization-model]].
- **The identity $\cos^{2}(\theta-\varphi)$ is classical and quantum at once.**
  The same projection formula governs the classical transverse field amplitude
  and the quantised polarisation amplitude; the comparison, and the reason that
  the coincidence of the numbers does not establish field quantisation, is the
  subject of the companion examples page of this pair, which is not a
  prerequisite of this lemma.
