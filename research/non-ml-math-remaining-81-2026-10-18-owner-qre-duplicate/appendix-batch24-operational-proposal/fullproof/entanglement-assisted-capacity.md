# Entanglement-assisted capacity: full operational bridge

Isolated construction. The native operational model permits an arbitrary finite shared state independent of the message and message-dependent CPTP encoders, with average decoding error. Shared entanglement has no consumption/dimension constraint. Let $f_{\mathcal N}(\rho)=S(\rho)+I_c(\rho,\mathcal N)$ and $F(\mathcal N)=\max_\rho f_{\mathcal N}(\rho)$. The native maximum-attainment and optimized-information additivity lemmas are retained, with their actual finite-dimensional entropy/SSA interfaces.

## Flat-state direct code

Fix a $D$-dimensional subspace of the input, with embedding $J$ and flat state $\tau=JJ^*/D$. Share $|\Phi_D\rangle$ between the sender's subspace and a receiver reference $R$. On the sender half apply the $D^2$ Weyl unitaries, each uniformly likely, before the input embedding. The Weyl matrices in the fixed ordered basis are $U_{ab}|j\rangle=e^{2\pi i bj/D}|j+a\pmod D\rangle$. Direct summation over $b$ kills off-diagonal matrix units; summation over $a$ gives the maximally mixed diagonal. Consequently their average action on the sender half of $\Phi_D$ gives $I_D/D\otimes I_R/D$.

Let $\sigma_{ab}$ be the joint output on $B R$ of this finite cq alphabet through $\mathcal N$. Because $(U_{ab}\otimes I)|\Phi_D\rangle=(I\otimes U_{ab}^T)|\Phi_D\rangle$ in coefficient coordinates, all $\sigma_{ab}$ are related by a unitary on $R$ and have identical entropy $S(\mathcal N^c(\tau))$ by purity of the full Stinespring output. Their average is $\mathcal N(\tau)\otimes I_R/D$. Thus the ensemble Holevo information is exactly
$$\chi=\ln D+S(\mathcal N(\tau))-S(\mathcal N^c(\tau))=f_{\mathcal N}(\tau).$$
The actual accepted HSW theorem applies to this fixed finite cq channel $ab\mapsto\sigma_{ab}$, with output $B R$. Each cq codeword is physically implemented by its sequence of Weyl operations on independent shared maximally entangled pairs. Its collective POVM is a permitted receiver measurement and its rate/error are exactly those of HSW. Therefore every nonnegative rate strictly below $f_{\mathcal N}(\tau)$ is entanglement-assisted achievable. Dimension $D=1$ is included: the one-letter ensemble then has Holevo information zero.

## General-input direct code without a hidden continuity limit

For any input state $\rho$ and positive integer $m$, exact spectral type reduction gives a flat state $\tau_t$ on an $m$-use input subspace such that
$$f_{\mathcal N^{\otimes m}}(\tau_t)\ge m f_{\mathcal N}(\rho)-2d\ln(m+1),\qquad d=\dim A.$$
Apply the flat-state construction to that fixed block channel. For fixed $m$, both its Weyl alphabet and its receiver output dimension are finite, so the actual HSW theorem applies before any limit in $m$ is taken. The shared resource is the flat type-subspace maximally entangled state for each outer block. Padding fewer than $m$ unused original-channel inputs with a fixed state gives codes for all sufficiently large lengths and no asymptotic rate loss. Therefore
$$C_E(\mathcal N)\ge f_{\mathcal N}(\rho)-\frac{2d\ln(m+1)}m.$$
Let $m\to\infty$ and maximize over $\rho$. This proves the general direct bound with precisely the native unlimited finite-shared-entanglement model. No unrestricted quantum-input HSW single-letter theorem and no inference from Schumacher compression alone is used.

## Every extension is a channel from a purification

Let $\omega_{ZA}$ be any finite-dimensional extension of $\rho_A$, and let $|\psi\rangle_{RA}$ purify $\rho_A$ with $R$ a copy of $A$. There is a CPTP map $\Lambda:R\to Z$ with $(\Lambda\otimes\operatorname{id}_A)(\psi)=\omega$.

To prove this explicitly, purify $\omega$ on $ZAF$ and reorder to $A(ZF)$. In an eigenbasis of the positive part of $\rho_A$, the two purifications have the same Schmidt coefficients. Send each corresponding Schmidt vector of $R$ isometrically to its partner in $ZF$. Enlarge $F$ by a finite pure ancilla if necessary so this partial isometry extends to an isometry on all of $R$; the remaining orthonormal basis vectors are sent to unused orthonormal vectors. Taking the partial trace of that isometric output over $F$ defines the desired channel. Its action on the fixed purification is the chosen purification of $\omega$. This also covers singular $\rho_A$, since the zero-Schmidt directions never occur in $\psi$.

## Converse for arbitrary shared-state encoders

Consider any length-$n$ native EA code with uniform message register $M$, receiver's prior share $S$, channel input $A^n$, and receiver output $B^nS$. Before transmission its joint state is
$$\omega_{MA^nS}=\frac1K\sum_m|m\rangle\langle m|\otimes(\mathcal E_m\otimes\operatorname{id}_S)(\sigma).$$
The marginal $MS$ is the product of the uniform message and the original share: each encoder is trace-preserving and hence cannot change $S$. In particular $I(M:S)=0$. Let $\bar\rho_{A^n}$ be its average input. By the extension lemma, the $MSA^n$ state is obtained by a channel on the reference of a purification of $\bar\rho_{A^n}$. After transmission, quantum-mutual-information data processing gives
$$I(MS:B^n)\le I(R:B^n)_{(\operatorname{id}\otimes\mathcal N^{\otimes n})(\psi_{\bar\rho})}.$$
Expanding the entropy definitions gives the exact identity
$$I(M:B^nS)=I(MS:B^n)-I(S:B^n)+I(M:S).$$
The last term is zero, and $I(S:B^n)\ge0$ by subadditivity. Therefore
$$I(M:B^nS)\le I(R:B^n)\le F(\mathcal N^{\otimes n})=nF(\mathcal N).$$
The equality uses the native optimized-information additivity lemma, whose proof follows local-channel mutual-information data processing and product-state entropy additivity. Bob's actual POVM and the Holevo bound imply $I(M;\widehat M)\le I(M:B^nS)$. Fano then gives
$$(1-e_n)\ln K_n\le nF(\mathcal N)+h(e_n).$$
Singleton message sets are trivial. Divide by $n$ and let average error tend to zero to bound every achievable rate by $F(\mathcal N)$, without restricting the shared state, its dimension, or the message-dependent CPTP encoders. Together with the general direct bound, purification identity and attained maximum, this proves the entire retained operational formula. Finally applying the identity $C_E=F$ to both channels and their product, and using the native proved additivity of $F$, proves the capacity additivity assertion as well.
