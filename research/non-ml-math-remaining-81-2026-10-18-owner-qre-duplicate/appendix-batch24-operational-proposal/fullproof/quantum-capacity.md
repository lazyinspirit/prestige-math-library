# Quantum capacity: finite decoupling, direct code, converse

Isolated proof construction. Use the finite estimates in finite-estimates.md and the actual accepted finite Stinespring, Schmidt, purification/root-fidelity characterization, Fuchs–van de Graaf, partial-trace contraction, and batch24 quantum-mutual-information data-processing suppliers. The operational quantity is the native isometric subspace entanglement-transmission capacity, with squared entanglement fidelity. The argument below constructs that code directly, without silently switching to entanglement generation.

## Finite averaging and random compression estimate

Let $D\ge2$, $1\le K\le D$, and $\omega_{AE}\succeq0$ with $\dim A=D$, $\operatorname{tr}\omega\le1$, and $r=\operatorname{rank}\omega_E$. For every $\delta>0$ there is an explicitly specified finite probability ensemble of isometries $W:\mathbb C^K\to\mathbb C^D$ such that, for
$$\omega^W_{RE}=\frac DK(W^T\otimes I_E)\omega_{AE}(\overline W\otimes I_E),$$
one has
$$\mathbb E\left\|\omega^W_{RE}-\frac{I_R}{K}\otimes\omega_E\right\|_1\le\sqrt{2Kr\operatorname{tr}(\omega_{AE}^2)}+\delta.$$
At the same time the ensemble can be required to satisfy, for every Hermitian $Z_{AE}$,
$$\mathbb E\left\|\frac DK(W^T\otimes I)Z(\overline W\otimes I)\right\|_1\le(1+\delta)\|Z\|_1.$$
No Haar existence or Gaussian-law supplier, and no choice axiom, is used.

Proof. Let $G$ be the finite group of monomial unitaries whose nonzero entries are fifth roots of unity. Let $R$ be the real rotation by $\pi/4$ in coordinates 1 and 2, acting identically elsewhere. Use the symmetric finite list $\mathcal S=G\cup\{R,R^*\}$, retaining multiplicities if any. At each walk step choose the identity with probability $1/2$ and an element of this list uniformly with the remaining probability. For $j=1,2$, the moment operator on matrices is
$$T_j(X)=\tfrac12X+\frac1{2|\mathcal S|}\sum_{U\in\mathcal S}U^{\otimes j}X(U^*)^{\otimes j}.$$
These are self-adjoint contractions for the Hilbert–Schmidt inner product, because the list is inverse-symmetric; laziness makes every eigenvalue nonnegative. Moreover
$$\langle X,(I-T_j)X\rangle=\frac1{4|\mathcal S|}\sum_{U\in\mathcal S}\|X-U^{\otimes j}X(U^*)^{\otimes j}\|_2^2.$$
Thus their fixed spaces are exactly the simultaneous commutants of the displayed finite unitaries.

For $j=1$, the independent diagonal fifth-root phases force a commuting matrix to be diagonal; permutations force all its diagonal entries equal. For $j=2$, a matrix coefficient from $|i,j\rangle$ to $|k,l\rangle$ can survive the diagonal phases only when the unordered multisets $\{i,j\}$ and $\{k,l\}$ agree. Indeed each index occurs with multiplicity 0, 1 or 2; equality modulo 5 of every exponent forces equality of these integer multiplicities. Commutation with all permutations then leaves three constants: $c$ on $|i,i\rangle$, $a$ on $|i,j\rangle\langle i,j|$ for $i\ne j$, and $b$ on $|i,j\rangle\langle j,i|$. Commutation with $R\otimes R$ applied to $|1,1\rangle$, whose rotated vector has nonzero coefficients on both $|1,2\rangle$ and $|2,1\rangle$, forces $c=a+b$. Conversely $I$ and the swap $F$ commute with every tensor-square unitary. The fixed space is therefore precisely $\operatorname{span}\{I,F\}$, also when $D=2$.

Finite-dimensional spectral decomposition now gives orthogonal projections $\mathcal P_1,\mathcal P_2$ onto these fixed spaces and a number $0\le\lambda<1$ such that
$$\|T_j^L-\mathcal P_j\|_{2\to2}\le\lambda^L,\qquad j=1,2.$$
If the orthogonal complement is zero, take its spectral radius as zero. Every $T_j^L$ is the moment of an actual finite distribution of length-$L$ unitary words; the limit is only a finite-matrix spectral calculation, not an assumed Haar integral. The first projection is $\mathcal P_1(X)=\operatorname{tr}(X)I/D$. For any rank-$K$ projection $P_0$, invariance of trace and swap trace gives
$$\mathcal P_2(P_0\otimes P_0)=a_0I+b_0F,\qquad a_0=\frac{K(KD-1)}{D(D^2-1)},\quad b_0=\frac{K(D-K)}{D(D^2-1)}.$$
The coefficients solve $a_0D^2+b_0D=K^2$ and $a_0D+b_0D^2=K$.

Choose a coordinate isometry $W_0$ and let $W=UW_0$, where $U$ is a finite walk word. Complex conjugation preserves the same limiting first and second moment projections and their norm bounds, so they apply to $P=\overline W W^T$ as well. The swap identity on matrix units gives the following limiting second moment, with $\Omega=I_R/K\otimes\omega_E$:
$$\lim_{L\to\infty}\mathbb E\|\omega^W-\Omega\|_2^2
=\frac{D(KD-1)}{K(D^2-1)}\operatorname{tr}(\omega^2)+\frac{1-DK}{K(D^2-1)}\operatorname{tr}(\omega_E^2)
\le2\operatorname{tr}(\omega^2).$$
In detail, the squared-state term is $(D^2/K^2)\{a_0\operatorname{tr}(\omega^2)+b_0\operatorname{tr}(\omega_E^2)\}$, and the limiting mean is $\Omega$, so subtract $\operatorname{tr}(\omega_E^2)/K$.

The finite moment error has a quantitative bound. Put $d_E=\dim E$ and $\varepsilon=\lambda^L$. The first-moment error in each matrix unit of the compressed reference is at most $\varepsilon$ in Hilbert–Schmidt norm; contracting it with $\omega$ shows $\|\mathbb E\omega^W-\Omega\|_2\le D\varepsilon\|\omega\|_2\le D\varepsilon$. For the squared-state term, the second-moment error on $P_0\otimes P_0$ has Hilbert–Schmidt norm at most $K\varepsilon$. In its trace pairing with $F_E(\omega\otimes\omega)$, the partial trace over the two environment copies has Hilbert–Schmidt norm at most $d_E\|\omega\|_2^2\le d_E$ (Cauchy–Schwarz for each diagonal block). Consequently that squared-state error is at most $D^2d_E\varepsilon/K$. The cross term with $\Omega$, whose Hilbert–Schmidt norm is at most $1/\sqrt K$, has error at most $2D\varepsilon/\sqrt K$. Hence, with $C_D=D^2d_E+2D$,
$$\mathbb E\|\omega^W-\Omega\|_2^2\le2\operatorname{tr}(\omega^2)+C_D\varepsilon.$$
Positivity implies $\operatorname{supp}\omega\subseteq A\otimes\operatorname{supp}\omega_E$: a kernel vector of the marginal has a sum of nonnegative diagonal quadratic forms equal to zero, forcing the corresponding rows and columns to vanish. Thus each difference has rank at most $Kr$. Cauchy–Schwarz on singular values and Jensen give the trace-norm bound at most $\sqrt{2Kr\operatorname{tr}(\omega^2)}+\sqrt{KrC_D\varepsilon}$.

Finally write a Hermitian $Z$ as $Z_+-Z_-$. Positivity of compression bounds its trace norm by the two positive compressed traces. The first-moment bound $\|\mathbb EP-(K/D)I\|_\infty\le\sqrt K\varepsilon$ gives
$$\mathbb E\|\mathcal C_W(Z)\|_1\le(1+D\varepsilon/\sqrt K)\|Z\|_1.$$
Choose a finite $L$ with both $KrC_D\lambda^L\le\delta^2$ and $D\lambda^L/\sqrt K\le\delta$. Such an integer exists by $\lambda<1$; the least such integer is a specified choice. If $r=0$, the positive operator is zero and its decoupling bound is automatic. This proves both assertions with an actual finite ensemble and exact dimension-dependent moment control.

## Flat-input coherent-information direct code

Let $V:\mathbb C^d\to B\otimes E$ be a Stinespring isometry and $\tau=I_d/d$. Every $0<R<I_c(\tau,\mathcal N)$ is achievable by isometric subspace entanglement transmission. If the coherent information is nonpositive, the lower bound is supplied by the one-dimensional code.

Proof. Set $s_B=S(\mathcal N(\tau))$, $s_E=S(\mathcal N^c(\tau))$. Choose $\eta>0$ with $R<s_B-s_E-2\eta$. On $n$ uses, let $|v_n\rangle=(I\otimes V^{\otimes n})|\Phi_{d^n}\rangle$ in factor order $A'B^nE^n$. Let $P_n,Q_n$ be the spectral projectors for the IID receiver and environment states from finite-estimates.md, and let $\epsilon_n\le Ce^{-cn}$ bound the sum of their failure probabilities. The commuting joint projection has acceptance at least $1-\epsilon_n$. For
$$|\widehat v_n\rangle=(I_{A'}\otimes P_n\otimes Q_n)|v_n\rangle,$$
the rank-two pure-vector calculation used in gentle measurement gives
$$\bigl\||v_n\rangle\langle v_n|-|\widehat v_n\rangle\langle\widehat v_n|\bigr\|_1\le2\sqrt{\epsilon_n}.$$
This follows also by applying the actual gentle-measurement lemma to the pure state and the joint projection. Let $\omega=\operatorname{Tr}_{B^n}|\widehat v_n\rangle\langle\widehat v_n|$. Its environment rank is at most $e^{n(s_E+\eta)}$. Since the projected vector is pure,
$$\operatorname{tr}(\omega^2)=\operatorname{tr}(\omega_{B^n}^2).$$
Moreover
$$0\preceq\omega_{B^n}\preceq P_n\mathcal N(\tau)^{\otimes n}P_n\preceq e^{-n(s_B-\eta)}P_n.$$
To verify the first inequality, take the partial trace after $Q_n$; the complementary environment projection produces another positive summand of the original receiver marginal. Hence $\operatorname{tr}(\omega^2)\le e^{-n(s_B-\eta)}$, because its trace is at most one.

Take $K_n=\lfloor e^{nR}\rfloor$. It is at most $d^n$: subadditivity on the pure Stinespring output implies $s_B\le\ln d+s_E$. If $I_c>0$ then $d\ge2$. For an isometry $W:\mathbb C^{K_n}\to(\mathbb C^d)^{\otimes n}$, let $\rho^W_{RE^n}$ be the environment/reference state produced by encoding half of $|\Phi_{K_n}\rangle$. Coefficient matrices give exactly the normalized-compression expression for the unprojected marginal. Use the finite ensemble above with tolerance $e^{-n}$. Apply its compression estimate to $\omega$, and its averaged trace-contraction estimate to the difference between projected and unprojected marginals. Their environment marginals differ by at most $2\sqrt{\epsilon_n}$. The triangle inequality therefore yields
$$\mathbb E\left\|\rho^W_{RE^n}-\frac{I_R}{K_n}\otimes\mathcal N^c(\tau)^{\otimes n}\right\|_1
\le6\sqrt{\epsilon_n}+2e^{-n}+\sqrt{2e^{-n(s_B-s_E-R-2\eta)}}\longrightarrow0.$$
Order the finite generator list and its length-$L$ words. For each $n$, take the first word whose displayed norm is at most twice its expectation; if that expectation is zero, take the first zero-norm word. A qualifying word exists by finite averaging. This specifies the entire encoder sequence without countable choices.

The product target is purified by $|\Phi_{K_n}\rangle_{RM}\otimes|e_n\rangle_{E^nF}$, with a sufficiently large finite $F$. The actual encoded Stinespring output is another purification on reference/environment versus receiver. Root-fidelity purification characterization, after adding a pure finite ancilla to the receiver if needed, supplies an isometry on the receiver's purifying space whose overlap with that target is the root fidelity of the two marginals. The fixed-purification form follows from the published purification/unitary-equivalence theorem. Fuchs–van de Graaf makes this root fidelity at least one minus half the displayed norm. Trace out the extra decoder factor $F$: the resulting CPTP decoder has squared entanglement fidelity at least the square of that overlap and hence tending to one. The encoder is exactly the isometry $W$; no generating-code/transmitting-code equivalence is assumed. Fix ordered bases throughout. In the purification characterization use the polar/SVD attaining map, extending every kernel partial isometry by the ordered basis completion; in repeated eigenspaces, project the ordered coordinate vectors and Gram–Schmidt in that order. This specifies a decoder at each block length by one formula, rather than choosing a sequence of unrelated attaining maps.

## Arbitrary input and regularized direct bound

For any state $\rho$, apply the exact type reduction to $\rho^{\otimes m}$ and choose a type with
$$I_c(\tau_t,\mathcal N^{\otimes m})\ge mI_c(\rho,\mathcal N)-d\ln(m+1).$$
Restrict the input of the $m$-use channel to that type subspace and apply the flat-input direct construction. Concatenating the type embedding with its isometric code preserves the operational encoder condition. Thus
$$Q(\mathcal N)\ge I_c(\rho,\mathcal N)-\frac{d\ln(m+1)}m.$$
Here and below a negative right side is covered by rate zero. To pass from codes of length divisible by $m$ to all lengths $n$, take $k=\lfloor n/m\rfloor$, use the $k$-block code, and pad the remaining fewer than $m$ inputs with a fixed pure state; the decoder discards their outputs. Fidelity is unchanged and the rate loss tends to zero. Let $m\to\infty$. Applying this result to any fixed block channel $\mathcal N^{\otimes j}$ and padding again gives $Q(\mathcal N)\ge q_j/j$ for every $j$, and therefore the full regularized direct bound.

## Fidelity converse

For an actual length-$n$ isometric code of dimension $K$, let $\rho=W(I_K/K)W^*$, let $\zeta_{RM}$ be its decoded entangled state, and put $t=T(\zeta,\Phi_K)$. Fuchs–van de Graaf gives $t\le\sqrt{1-F_n}$, because $F_n$ is the squared overlap with the pure target. Partial-trace contraction gives $T(\zeta_M,I_K/K)\le t$. Quantitative continuity on dimensions $K$ and $K^2$ yields
$$S(M)_\zeta\ge\ln K-t\ln K-g(t),\qquad S(RM)_\zeta\le2t\ln K+g(t).$$
Thus decoded coherent information is at least $(1-3t)\ln K-2g(t)$. A decoder cannot increase coherent information: its reference entropy is unchanged, and quantum mutual-information data processing applied to $I(R:B)$ gives $S(B)-S(RB)\ge S(M)-S(RM)$. Before decoding, the purification is the encoded half-maximally-entangled state, so its coherent information equals $I_c(\rho,\mathcal N^{\otimes n})\le q_n$. Consequently
$$q_n\ge(1-3t)\ln K-2g(t).$$
For a reliable code sequence $t\to0$, and $K\le(\dim A)^n$ because the encoder is isometric. Divide by $n$ and use this uniform dimension bound to conclude that the limsup code rate is at most $\lim q_n/n$. Dimension-one codes need no continuity estimate. Combining the converse, the direct bound for every fixed block, and the native proved superadditive limit gives exactly the retained full quantum-capacity statement.
