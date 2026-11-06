---
id: def-st-bosonic-brst-complex
kind: definition
title: "Bosonic BRST Complex"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 8
deps:
  - def-st-bosonic-matter-oscillator-modes
  - def-st-bosonic-covariant-state-space
  - def-st-bosonic-bc-ghost-system
dependency_roles:
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
  def-st-bosonic-covariant-state-space: formulation-prerequisite
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
physical_scope: "Open or single-chiral closed-string BRST oscillator complex at fixed target momentum on the algebraic finite-particle domain; the Krein form is indefinite off physical cohomology."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§5.4–5.4.3 (PDF file pp.127–131; printed pp.120–124); BRST context, not the full relative-complex convention."
    - title: "Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3"
      url: "https://arxiv.org/pdf/hep-th/0607105v3"
      locator: "pp. 2–4; Q_B decomposition, on-shell condition, and relative b_0 restriction."
    - title: "Sebastian Uhlmann, String Field Theory: Methods And Solutions (2003 doctoral thesis)"
      url: "https://inspirehep.net/files/4e83b34189b9aa75c9ac544ecbdd3b7a"
      locator: "Chapter III.2, printed p.38 (PDF p.48), equations (III.20)–(III.23); linear BPZ and graded mode-product reversal only."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

At fixed target momentum p, choose chiral zero mode $k^{\mu }=\alpha _{0}^{\mu }$ by $k=\sqrt{2 \alpha'}p$ for the open string and $k=\sqrt{\alpha'/2}p$ for each closed-string chiral half. On the algebraic tensor product of the corresponding matter oscillator Fock space and finite-particle bc ghost Fock space, with $\operatorname{gh}(c_{n})=+1$ and $\operatorname{gh}(b_{n})=-1$, put $|\downarrow\rangle=c_{1}|0\rangle$. In the BRST cubic mode sum only, normal order relative to this relative vacuum: $b_{n}$ and $c_{n}$ annihilate it for $n>0$, while $b_{0}|\downarrow\rangle=0$ and $c_{0}$ is the separate zero mode. Define $Q_B=\sum_n c_{-n}(L_n^m-a\delta_{n,0})-\frac12\sum_{m,n}(m-n):c_{-m}c_{-n}b_{m+n}:$. On the unital complex oscillator mode superalgebra, before fixing the zero-mode eigenvalue, define the linear graded BPZ anti-involution by $\operatorname{bpz}(\alpha _{n}^{\mu })=(-1)^{n+1}\alpha _{-n}^{\mu }, \operatorname{bpz}(b_{n})=(-1)^{n} b_{-n}, \operatorname{bpz}(c_{n})=(-1)^{n+1}c_{-n}$, and $\operatorname{bpz}(1)=1$, $\operatorname{bpz}(AB)=(-1)^{|A||B|}\operatorname{bpz}(B)\operatorname{bpz}(A)$ for parity-homogeneous mode polynomials $A,B$. Here parity $|A|\in\{0,1\}$ is the number of ghost generators modulo two in each homogeneous monomial; matter generators and complex scalars have parity zero. Extend by complex linearity. Since $\operatorname{bpz}(\alpha _{0}^{\mu })=-\alpha _{0}^{\mu }$, this map exchanges the zero-mode specializations k and -k; it is not an endomorphism of a nonzero fixed-momentum fibre or the Hermitian physical form. Separately define an antilinear Krein adjoint dagger by $(\alpha _{n}^{\mu })^{\dagger}=\alpha _{-n}^{\mu }, b_{n}^{\dagger}=b_{-n}, c_{n}^{\dagger}=c_{-n}$, with scalar fixed-momentum matter vacuum pairing $\langle0;k|0;k\rangle_K=1$ and ghost normalization $\langle0|c_{-1}c_0c_1|0\rangle_K=1$. The resulting matter-plus-ghost ambient Hermitian Krein form is indefinite. A delta normalization between distinct generalized momentum eigenstates is not a scalar form on this fixed-momentum fibre and is not used here. Descent to cohomology and positivity require separate results and are not asserted by this definition. Then $\operatorname{gh}(Q_{B})=+1$ and $L_0^{\mathrm{tot}}=\{Q_B,b_0\}$. When $Q_{B}$ is nilpotent, define $C_{\mathrm{rel}}^{q}(p)=\{\psi :\operatorname{gh}(\psi )=q, b_{0} \psi =0, L_{0}^{\mathrm{tot}} \psi =0\}$ and $H_{\mathrm{rel}}^{q}(p)=\ker (Q_{B}|C_{\mathrm{rel}}^{q})/\operatorname{im}(Q_{B}|C_{\mathrm{rel}}^{q-1})$; on $q=1$ first define the scalar chain form $h_{\mathrm{rel}}(\psi ,\phi )=\langle\psi|c_0|\phi\rangle_K$ on $C_{\mathrm{rel}}^{1}(p)$, with $c_{0}^{\dagger}=c_{0}$. For cycles psi,phi the notation $h_{\mathrm{rel}}([\psi ],[\phi ])$ denotes the candidate induced form only when independence of cycle representatives has been proved. With the relative vacuum assigned ghost number one, define the total oscillator level operator $N_{tot}=N_{m}+\sum _{n>0} n(b_{-n}c_{n}+c_{-n}b_{n})$, where $N_{m}=\sum _{n>0} \alpha _{-n} \cdot  \alpha _{n}$. Its eigenvalue on $|k\rangle|\downarrow\rangle$ is zero, and every negative-index matter or ghost creator of index -n adds n. For each nonnegative integer N let $F_{N}(p)$ be the span of all such monomials of total level N over $|k\rangle|\downarrow\rangle$, with no $c_{0}$ factor. Define $C_{\mathrm{rel}}^{q}(p,N)=C_{\mathrm{rel}}^{q}(p) \cap  F_{N}(p)$ and $H_{\mathrm{rel}}^{q}(p,N)$ as its $Q_{B}$ cohomology when $Q_{B}$ is nilpotent. On $F_{N}(p), L_{0}^{\mathrm{tot}}=k^{2}/2+N-a$. Thus $C_{\mathrm{rel}}(p,N)=F_{N}(p)$ when this scalar vanishes and is zero otherwise; N labels total matter-plus-ghost oscillator level, not matter level alone. The full algebraic relative complex is the direct sum of these total-level complexes.

## Definition references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§5.4–5.4.3 (PDF file pp.127–131; printed pp.120–124); BRST context, not the full relative-complex convention.

[Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3](https://arxiv.org/pdf/hep-th/0607105v3), pp. 2–4; $Q_{B}$ decomposition, on-shell condition, and relative $b_{0}$ restriction.

[Sebastian Uhlmann, String Field Theory: Methods And Solutions (2003)](https://inspirehep.net/files/4e83b34189b9aa75c9ac544ecbdd3b7a), Chapter III.2, printed p.38 (PDF p.48), equations (III.20)–(III.23); linear BPZ and graded mode-product reversal.

## Facts & Assumptions

[F1] [[def-st-bosonic-matter-oscillator-modes]] defines the dimensionless modes with $[\alpha_m^\mu,\alpha_n^\nu]=m\eta^{\mu\nu}\delta_{m+n,0}$ and $L_n^m=\frac12\sum_r:\alpha_{n-r}\cdot\alpha_r:$, normally ordered on the algebraic finite-particle Fock domain at fixed momentum.

[F2] [[def-st-bosonic-bc-ghost-system]] fixes the ghost sector

[F3] [[def-st-bosonic-covariant-state-space]] defines the dimensionless normal-ordering intercept parameter.

The momentum vector $p$ is a fixed element of $\mathbb R^{1,D-1}$, and the two displayed values of $k^\mu=\alpha_0^\mu$ are the open and single-chiral closed normalizations. The matter Fock space is the algebraic span of finite products of negative-index matter modes; the ghost Fock space is the algebraic span of finite products of creation modes from the SL(2)-invariant vacuum. Matter normal ordering is relative to the momentum vacuum. The BRST cubic mode sum is normal ordered relative to $|\downarrow\rangle=c_{1}|0\rangle$, while the underlying bc fields and ghost stress tensor retain their SL(2)-vacuum convention. Only the conjugate pair $c_1,b_{-1}$ changes creator/annihilator roles between the two vacua: $c_1$ annihilates $|\downarrow\rangle$ and $b_{-1}$ creates, whereas the SL(2) roles are reversed. In the cubic sum a contraction of this pair requires $(m,n)=(-1,0)$ or $(0,-1)$. Since $\{b_{-1},c_1\}=1$, $-b_{-1}c_0c_1=c_1c_0b_{-1}+c_0$; thus the first ordered triple changes by $c_0$ with prefactor $1/2$, and the second changes by $-c_0$ with prefactor $-1/2$. All other triples have unchanged ordering or zero contraction. Consequently $G_\downarrow-G_{SL(2)}=c_0$, so the displayed physical intercept a corresponds to the SL(2)-ordered charge $C+G_{\mathrm{SL}(2)}-(a-1)c_{0}$. All mode sums act locally finitely on every finite-particle vector. The BPZ map uses graded product reversal, whereas $\dagger$ uses ordinary reversal $(AB)^\dagger=B^\dagger A^\dagger$ and is antilinear. In particular $\operatorname{bpz}(\{b_m,c_n\})=(-1)^{m+n}\{b_{-m},c_{-n}\}=\delta_{m+n,0}$, so the odd reversal sign preserves the ghost CAR, including $\{b_0,c_0\}=1$. For matter modes, ordinary reversal gives $\operatorname{bpz}([\alpha_m^\mu,\alpha_n^\nu])=(-1)^{m+n}[\alpha_{-n}^\nu,\alpha_{-m}^\mu]=m\eta^{\mu\nu}\delta_{m+n,0}$; zero ghost anticommutators and mixed commutators remain zero. Applying BPZ twice fixes each generator and each product, so it is a well-defined graded anti-involution of the stated abstract algebra. BPZ and the Hermitian Krein adjoint are not interchangeable.

## Verification
**Given:** Use the BRST operator in the Definition on the algebraic tensor-product domain, the matter, ghost, and intercept conventions of [F1]–[F3], and assume it is nilpotent when defining cohomology.

1.1 In the anticommutator $\{Q_B,b_0\}$, the linear matter term contributes $L_0^m-a$ because $\{c_{-n},b_0\}=\delta_{n,0}$. Anticommuting $b_0$ through the cubic term selects $m=0$ or $n=0$, since $\{b_0,c_{-m}\}=\delta_{m0}$ and $\{b_0,c_{-n}\}=\delta_{n0}$. The remaining relative-vacuum normally ordered sum is $\sum_{n>0}n(b_{-n}c_n+c_{-n}b_n)$. Their sum is exactly the total zero mode $L_0^{tot}$. [given, F1, F2, F3, algebra]

2.1 The oscillator commutators and ghost CAR give $[N_{tot},\alpha_{-n}^\mu]=n\alpha_{-n}^\mu$, $[N_{tot},b_{-n}]=nb_{-n}$ and $[N_{tot},c_{-n}]=nc_{-n}$ for $n>0$, with zero eigenvalue on the relative vacuum. Anticommuting the charge with $b_0$ in the relative-vacuum ordering therefore gives $L_0^{tot}=k^2/2+N_{tot}-a$. Every monomial of $Q_B$ has net mode index zero, so $[N_{tot},Q_B]=0$. At fixed $N$ only indices $1\le n\le N$ occur; matter occupations are bounded by $N/n$ and each odd ghost creator occurs at most once. Thus $F_N$ is finite dimensional across all ghost numbers, including the one-dimensional $N=0$ vacuum case. Fixed matter-level spaces alone need not be preserved: $c_{-n}L_n^m$ transfers $n$ units from matter to ghosts. [given, F1, F2, step 1.1, algebra]

3.1 If $Q_B^2=0$, then $[Q_B,L_0^{tot}]=[Q_B,\{Q_B,b_0\}]=0$. For $\psi$ with $b_0\psi=L_0^{tot}\psi=0$, one has $b_0Q_B\psi=L_0^{tot}\psi-Q_Bb_0\psi=0$ and $L_0^{tot}Q_B\psi=Q_BL_0^{tot}\psi=0$. Thus the relative subspaces and, by step 2.1, their fixed total-level subspaces are preserved. The displayed quotients are cohomologies when nilpotence holds. [given, step 1.1, F1, F2, algebra]

4.1 The declared ghost-number-one sesquilinear form is a candidate physical form only after it descends to cohomology; this definition alone asserts neither that descent nor positivity. [given, F1, F2] ∎

