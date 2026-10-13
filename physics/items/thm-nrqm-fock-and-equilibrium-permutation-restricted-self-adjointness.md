---
id: thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness
aliases: [nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness]
kind: theorem
domain: mathematics
title: "Permutation-restricted self-adjointness"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-euclidean-l2-product-unitary, thm-self-adjointness-range-criterion, def-finite-symmetric-group-and-permutation-notation, thm-sign-is-a-homomorphism, def-hilbert-space, def-bounded-linear-operator, def-hilbert-space-adjoint, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  thm-self-adjointness-range-criterion: mathematical-premise
  def-finite-symmetric-group-and-permutation-notation: mathematical-premise
  thm-sign-is-a-homomorphism: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.5 pp. 79-80 (orthogonal sums and reducing subspaces), Theorem 2.23 and Lemma 2.24"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.1 pp. 3-4 (permutation symmetry of identical-particle Hamiltonians and Slater determinants)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\mathfrak H$ be a complex Hilbert space, let $H$ be a self-adjoint operator on
$\mathfrak H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]),
let $N\ge1$, and let $(U_\pi)_{\pi\in S_N}$ be unitary operators on $\mathfrak H$
with $U_\pi U_\sigma=U_{\pi\sigma}$ and $U_\pi^*=U_{\pi^{-1}}$ for all
$\pi,\sigma\in S_N$ ([[def-hilbert-space-adjoint]]). Define
$$P_+:=\frac1{N!}\sum_{\pi\in S_N}U_\pi,\qquad P_-:=\frac1{N!}\sum_{\pi\in S_N}\operatorname{sgn}(\pi)U_\pi .$$
Assume that for every $\pi\in S_N$,
$$U_\pi D(H)\subseteq D(H)\qquad\text{and}\qquad U_\pi H\psi=HU_\pi\psi\quad(\psi\in D(H)).$$
Then:

(a) $P_+$ and $P_-$ are orthogonal projections on $\mathfrak H$;

(b) for every $z\in\rho(H)$ one has
$U_\pi(H-z)^{-1}=(H-z)^{-1}U_\pi$ and hence $P_\pm(H-z)^{-1}=(H-z)^{-1}P_\pm$;

(c) $P_\pm D(H)\subseteq D(H)$ and $HP_\pm\psi=P_\pm H\psi$ for every
$\psi\in D(H)$;

(d) if $\operatorname{ran}P_\pm\ne\{0\}$, then the restriction
$H_\pm:=H|_{D(H)\cap\operatorname{ran}P_\pm}$ is a self-adjoint operator on the
Hilbert space $\operatorname{ran}P_\pm$
([[thm-self-adjointness-range-criterion]]);

(e) *application*: under the additional Axiom of Choice ([[def-axiom-of-choice]]), let $N\ge1$, $m>0$, $\hbar>0$, let $r\ge1$, let
$V_{\mathrm{ext}},W:\mathbb R^3\to\mathbb R$ be measurable and bounded, and assume $W(-z)=W(z)$ for every $z\in\mathbb R^3$. Put
$V(X):=\sum_{i=1}^NV_{\mathrm{ext}}(x_i)+\sum_{i<j}W(x_i-x_j)$ on
$\mathbb R^{3N}$, let $K$ be the free kinetic operator of
[[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]] with all masses
$m_i=m$, let $\Theta:L^2(\mathbb R^3)^{\otimes N}\to L^2(\mathbb R^{3N})$ be
the iterated Euclidean product unitary
([[lem-nrqm-composites-euclidean-l2-product-unitary]],
[[lem-nrqm-composites-hilbert-tensor-construction]]), let $U_\pi$ be the
permutation unitaries of [[lem-nrqm-composites-permutation-sector-projections]]
and set
$$U_\pi^{\mathrm{phys}}:=\Theta\,U_\pi\,\Theta^{-1},\qquad P_\pm^{\mathrm{phys}}:=\Theta\,P_\pm^{(N)}\,\Theta^{-1}.$$
Then $H:=K+M_V$ satisfies the hypotheses above for the representation
$U_\pi^{\mathrm{phys}}$, so $P_\pm^{\mathrm{phys}}$ reduce $H$ and the
restrictions of $H$ to the symmetric and antisymmetric sectors are self-adjoint
on those sectors.

No spin-statistics statement, no identification of a physical species with a
sector, and no claim about bound states or spectra is made.

## Facts & Assumptions

**Slot convention.** For $\ell\ge1$, $S_\ell$ acts on $\{0,\dots,\ell-1\}$ as in [[lem-nrqm-composites-permutation-sector-projections]]. On one-based tuple positions use $\widehat{\pi}(k):=1+\pi(k-1)$ for $1\le k\le\ell$. Conjugation by $k\mapsto k-1$ gives $\widehat{\pi\sigma}=\widehat{\pi}\circ\widehat{\sigma}$ and $\widehat{\pi^{-1}}=\widehat{\pi}^{-1}$; thus the supplier's tensor action becomes $U_\pi(v_1\otimes\cdots\otimes v_\ell)=v_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes v_{\widehat{\pi}^{-1}(\ell)}$. The parameters of $U_\pi$ and $\operatorname{sgn}(\pi)$ remain canonical zero-based permutations.
**Given:** the complex Hilbert space $\mathfrak H$, the self-adjoint operator $H$, the unitary representation $(U_\pi)$ of $S_N$, its averages $P_\pm$, numbers $z\in\rho(H)$ and vectors $\psi,\varphi\in\mathfrak H$.

[F1] By [[def-finite-symmetric-group-and-permutation-notation]], $S_N$ consists of the bijections of an $N$-element set, so it has $N!$ elements by choosing successive images in $N,N-1,\ldots,1$ ways. Its sign map is a homomorphism and is surjective for $N\ge2$ ([[thm-sign-is-a-homomorphism]]); choose $\tau$ with $\operatorname{sgn}(\tau)=-1$. Left multiplication by $\tau$ pairs the terms of $\sum_{\pi\in S_N}\operatorname{sgn}(\pi)$ with their negatives, so this sum is zero. Group averaging now gives $P_+^*=P_+$, $P_+^2=P_+$ and likewise $P_-^*=P_-$, $P_-^2=P_-$; for $N=1$, both averages equal the identity. The Hilbert adjoint and bounded-operator conventions are [[def-hilbert-space-adjoint]] and [[def-bounded-linear-operator]].

[F2] For a self-adjoint $H$ and $z\in\rho(H)$ the resolvent $R(z):=(H-z)^{-1}$ is a bounded bijection of $\mathfrak H$ onto $D(H)$ with inverse $H-z$; $D(H)$ is dense ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-bounded-linear-operator]]).

[F3] Range criterion: a densely defined symmetric operator $S$ is self-adjoint if and only if it is closed and $\operatorname{ran}(S-i)=\operatorname{ran}(S+i)=\mathfrak H$; equivalently if it is closed, symmetric and both $S\pm i$ are surjective ([[thm-self-adjointness-range-criterion]]).

[F4] The Euclidean product unitary $\Theta:H_1^{\otimes N}\to L^2(\mathbb R^{3N})$ satisfies $\Theta(f_1\otimes\cdots\otimes f_N)(x)=f_1(x_1)\cdots f_N(x_N)$; the permutation unitaries act by $U_\pi(f_1\otimes\cdots\otimes f_N)=f_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes f_{\widehat{\pi}^{-1}(N)}$. The equal-mass free kinetic operator is the maximal Fourier multiplier $K=\mathcal F_2^*M_\kappa\mathcal F_2$, $\kappa(\xi)=\frac{\hbar^2}{2m}\sum_i|\xi_i|^2$, on $D(K)=W^{2,2}(\mathbb R^{3N};\mathbb C)$. With the supplier's $e^{-2\pi iX\cdot\xi}$ convention, it equals $-\frac{\hbar^2}{8\pi^2m}\sum_i\Delta_i$ there. The multiplier $V$ as in (e) is invariant under permutations of the coordinates because $W$ is even ([[lem-nrqm-composites-euclidean-l2-product-unitary]], [[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-permutation-sector-projections]], [[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]]).




## Proof

1.1 [The averages are projections] Since $\pi\mapsto U_\pi$ is a unitary representation and $U_\pi^*=U_{\pi^{-1}}$, $P_+^*=\frac1{N!}\sum_\pi U_{\pi^{-1}}=P_+$ and $P_+^2=\frac1{(N!)^2}\sum_{\pi,\sigma}U_{\pi\sigma}=\frac1{N!}\sum_\tau U_\tau=P_+$; the same computation with the characters gives $P_-^*=P_-$, $P_-^2=P_-$. Hence both are orthogonal projections, which is (a). [F1, algebra]

1.2 [Resolvent commutation] Fix $z\in\rho(H)$ and $\varphi\in\mathfrak H$; put $\psi:=R(z)\varphi\in D(H)$. By hypothesis $U_\pi\psi\in D(H)$ and $(H-z)U_\pi\psi=U_\pi(H-z)\psi=U_\pi\varphi$; hence $U_\pi R(z)\varphi=R(z)U_\pi\varphi$ for every $\varphi$, so $U_\pi R(z)=R(z)U_\pi$; averaging gives $P_\pm R(z)=R(z)P_\pm$, which is (b). [F2, algebra]

1.3 [Reduction] Put $\chi_+(\pi)=1$ and $\chi_-(\pi)=\operatorname{sgn}(\pi)$. For $\psi\in D(H)$, $P_\pm\psi=\frac1{N!}\sum_\pi\chi_\pm(\pi)U_\pi\psi\in D(H)$ as a finite linear combination, and the commutation hypothesis gives $HP_\pm\psi=\frac1{N!}\sum_\pi\chi_\pm(\pi)HU_\pi\psi=\frac1{N!}\sum_\pi\chi_\pm(\pi)U_\pi H\psi=P_\pm H\psi$, proving (c). [given, F1, algebra]

2.1 [Self-adjointness of the restrictions] Assume $\operatorname{ran}P\ne\{0\}$ for $P=P_\pm$ and put $\mathfrak K:=\operatorname{ran}P$ and $S:=H|_{D(H)\cap\mathfrak K}$. Then $D(S)=P D(H)$ is dense in $\mathfrak K$ and $S$ is symmetric: for $\varphi,\psi\in D(S)$, $\langle S\varphi,\psi\rangle=\langle H\varphi,\psi\rangle=\langle\varphi,H\psi\rangle=\langle\varphi,S\psi\rangle$ because $H$ is self-adjoint and $\psi=P\psi$. $S$ is closed: if $\psi_k\in D(S)$, $\psi_k\to\psi$ and $S\psi_k\to\eta$ with $\psi,\eta\in\mathfrak K$, then $H$ closed gives $\psi\in D(H)$ and $H\psi=\eta$, and $\psi\in\mathfrak K$ because $\mathfrak K$ is closed; hence $\psi\in D(S)$, $S\psi=\eta$. Finally $\operatorname{ran}(S-i)=P\operatorname{ran}(H-i)$: indeed $(S-i)P\psi=P(H-i)\psi$ by step 1.3, and conversely every $P\chi$ with $\chi\in\mathfrak H$ equals $P(H-i)(H-i)^{-1}\chi=(S-i)P(H-i)^{-1}\chi$. Since $H-i$ is onto $\mathfrak H$ ([F3] applied to the self-adjoint $H$), $\operatorname{ran}(S-i)=\mathfrak K$, and the same argument gives $\operatorname{ran}(S+i)=\mathfrak K$. By [F3], $S$ is self-adjoint on $\mathfrak K$; this proves (d). [F3, step 1.3, algebra]

3.1 [The permutation-invariant instance] Let $H=K+M_V$ as in (e). The unitaries $U_\pi^{\mathrm{phys}}=\Theta U_\pi\Theta^{-1}$ form a unitary representation of $S_N$ on $L^2(\mathbb R^{3N})$ ([F4]). The weight $\kappa(\xi)=\frac{\hbar^2}{2m}\sum_i|\xi_i|^2$ is invariant under permutations of the blocks $\xi_i$, so $\Theta U_\pi\Theta^{-1}$ maps $D(K)$ onto itself and intertwines $K$ with itself; and $V(\pi X)=V(X)$ gives $U_\pi^{\mathrm{phys}}M_VU_\pi^{\mathrm{phys},-1}=M_V$ on all of $L^2$. Hence $U_\pi^{\mathrm{phys}}D(H)=D(H)$ and $U_\pi^{\mathrm{phys}}H=HU_\pi^{\mathrm{phys}}$ on $D(H)$, and step 2.1 applies to $P_\pm^{\mathrm{phys}}$, proving (e). [F4, step 1.2, step 1.3, step 2.1, algebra]

4.1 [Conclusion and scope] Steps 1.1-3.1 prove (a)-(e). The scope paragraph of the statement records that no spin-statistics assignment and no spectral conclusion is asserted; the symmetric and antisymmetric sectors are mathematical invariant subspaces of the specified operator. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, algebra] ∎
