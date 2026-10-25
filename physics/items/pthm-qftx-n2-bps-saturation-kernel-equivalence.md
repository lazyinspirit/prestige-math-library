---
id: pthm-qftx-n2-bps-saturation-kernel-equivalence
kind: physics-theorem
title: $N=2$ central-charge saturation is equivalent to annihilation by the null supercharge pair
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-algebra-and-multiplets
deps:
  - thm-qftx-n-extended-central-charge-bounds
  - def-qftx-unitary-super-poincare-representation
  - def-countable-choice
dependency_roles:
  thm-qftx-n-extended-central-charge-bounds: mathematical-premise
  def-qftx-unitary-super-poincare-representation: formulation-prerequisite
  def-countable-choice: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Conditional representation-theoretic statement for a massive rest fiber of a four-dimensional rigid N=2 unitary super-Poincare representation in natural units; it asserts no interacting QFT, particle existence, or stability."
sources:
  references:
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§3.4, printed pp. 13–15 (PDF pp. 18–20), equations (3.12)–(3.16): central-charge oscillator combinations, positivity, and zero-norm generators at saturation. Bilal's normalization is not silently imported."
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy2.pdf"
      locator: "§2.4.2, printed pp. 40–41 (PDF pp. 31–32): the massive N=2 oscillator combinations, their anticommutators, the BPS inequality, and saturation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume the Axiom of Countable Choice. Use the four-dimensional rigid $N=2$ super-Poincare convention with metric $\eta=\operatorname{diag}(-1,1,1,1)$, $\epsilon_{12}=1$, and natural units $\hbar=c=1$. Let $\mathcal K\ne\{0\}$ be a positive Hilbert rest-fiber representation with $P^\mu=(M,0,0,0)$, $M>0$, scalar central charges $Z^{12}=zI$ and $Z^{21}=-zI$, and a common dense invariant domain $\mathcal D$ on which the supercharges, their actual Hilbert adjoints, and every product below are defined. Thus $P_0=-M$, each supercharge has mass dimension one-half, and $M,z$ have mass dimension one. If $z\ne0$, set $\omega=z/|z|$; if $z=0$, set $\omega=1$. Then $|\omega|=1$ and $\overline{\omega} z=|z|$ by the central-charge theorem. On $\mathcal D$ put

$$q=Q^1_1,\qquad r=Q^2_2,\qquad A=q-\omega r^*,\qquad A^\sharp=q^*-\overline{\omega}r.$$

For every $\psi\in\mathcal D$,

$$\langle(AA^\sharp+A^\sharp A)\psi,\psi\rangle=\|A\psi\|^2+\|A^\sharp\psi\|^2=4(M-|z|)\|\psi\|^2.$$

Consequently, for every nonzero $\psi\in\mathcal D$, $M=|z|$ if and only if $A\psi=A^\sharp\psi=0$. The operator $A^\sharp$ is the displayed sum of the individual charge adjoints; for unbounded charges it is not asserted to be the maximal-domain adjoint of the sum $A$. This conditional statement neither asserts that such a vector or representation occurs in a physical model nor proves its dynamical stability.

## Statement references

[Bilal, §3.4](https://arxiv.org/pdf/hep-th/0101055)

[Tong, §2.4.2](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy2.pdf)

[[thm-qftx-n-extended-central-charge-bounds]]

[[def-qftx-unitary-super-poincare-representation]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The stated massive rest-fiber data and $\psi\in\mathcal D$.

[A1] Assume $\mathrm{AC}_\omega$, as required by the exact unbounded-operator and representation suppliers ([[def-countable-choice]]): for every sequence of nonempty sets there is a choice function selecting one element from each set.

[F1] [[thm-qftx-n-extended-central-charge-bounds]]: in the $N=2$ rest fiber, $\{q,q^*\}=\{r,r^*\}=2MI$, $\{q,r\}=2zI$, $\{r^*,q^*\}=2\bar zI$, and $AA^\sharp+A^\sharp A=4(M-|z|)I$ on the common product domain; at $M=|z|$ the two displayed combinations annihilate every vector in that domain.

[F2] [[def-qftx-unitary-super-poincare-representation]]: the Hilbert inner product is positive and linear in its first variable; each charge adjoint is its actual Hilbert adjoint; the common dense invariant domain is contained in the domains of all generator products in the algebra.

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1], [F2], and the operators in the Statement.

1.1 Expanding $\|A\psi\|^2+\|A^\sharp\psi\|^2$ gives $\|q\psi\|^2+\|r^*\psi\|^2+\|q^*\psi\|^2+\|r\psi\|^2-2\operatorname{Re}(\overline{\omega}\langle q\psi,r^*\psi\rangle)-2\operatorname{Re}(\omega\langle q^*\psi,r\psi\rangle)$. Expanding $AA^\sharp+A^\sharp A$ gives the same four diagonal terms. Its cross terms are $-\overline{\omega}(qr+rq)-\omega(r^*q^*+q^*r^*)$; the actual-adjoint identities $\langle qr\psi,\psi\rangle=\langle r\psi,q^*\psi\rangle$, $\langle rq\psi,\psi\rangle=\langle q\psi,r^*\psi\rangle$, $\langle r^*q^*\psi,\psi\rangle=\langle q^*\psi,r\psi\rangle$, and $\langle q^*r^*\psi,\psi\rangle=\langle r^*\psi,q\psi\rangle$ pair these terms into exactly the two negative real parts above. The common product-domain hypothesis makes each identity legitimate, so $\langle(AA^\sharp+A^\sharp A)\psi,\psi\rangle=\|A\psi\|^2+\|A^\sharp\psi\|^2$. [F2, given, algebra]

2.1 By [F1], the left side in step 1.1 equals $4(M-|z|)\|\psi\|^2$, so $4(M-|z|)\|\psi\|^2=\|A\psi\|^2+\|A^\sharp\psi\|^2$ for every $\psi\in\mathcal D$. This is an identity of nonnegative squared norms. [A1, F1, step 1.1]

3.1 If $\psi\ne0$ and $A\psi=A^\sharp\psi=0$, step 2.1 gives $4(M-|z|)\|\psi\|^2=0$. Since $\|\psi\|^2>0$, division by $4\|\psi\|^2$ yields $M=|z|$. [given, step 2.1, algebra]

4.1 If $M=|z|$, then [F1] gives $A\psi=A^\sharp\psi=0$ for every $\psi\in\mathcal D$. Together with step 3.1 this proves both directions for every nonzero domain vector. [F1, step 3.1] ∎
