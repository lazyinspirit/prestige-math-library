# Quantum capacity: finite decoupling, direct code, converse

Isolated proof construction. Use the finite estimates in finite-estimates.md and the actual accepted finite Stinespring, Schmidt, purification/root-fidelity characterization, Fuchs–van de Graaf, partial-trace contraction, and batch24 quantum-mutual-information data-processing suppliers. The operational quantity is the native isometric subspace entanglement-transmission capacity, with squared entanglement fidelity. The argument below constructs that code directly, without silently switching to entanglement generation.

## Random compression estimate

Let $D\ge2$, $1\le K\le D$, and $\omega_{AE}\succeq0$ with $\dim A=D$, $\operatorname{tr}\omega\le1$, and $r=\operatorname{rank}\omega_E$. Let $W:\mathbb C^K\to\mathbb C^D$ be a uniformly rotated isometry, and define
$$\omega^W_{RE}=\frac DK(W^T\otimes I_E)\omega_{AE}(\overline W\otimes I_E).$$
Then
$$\mathbb E\left\|\omega^W_{RE}-\frac{I_R}{K}\otimes\omega_E\right\|_1\le\sqrt{2Kr\operatorname{tr}(\omega_{AE}^2)}.$$
For every Hermitian $Z_{AE}$, normalized compression also satisfies
$$\mathbb E\left\|\frac DK(W^T\otimes I)Z(\overline W\otimes I)\right\|_1\le\|Z\|_1.$$

Proof. A uniformly rotated $W$ is the first $K$ columns of a Haar-distributed unitary. Its distribution can concretely be obtained by Gram–Schmidt on a finite matrix of independent standard complex Gaussians; the singular set has measure zero, and left-unitary invariance follows from the Gaussian density. Thus the averages here are ordinary finite-dimensional probability integrals. Put $P=\overline W W^T$. Unitary invariance gives $\mathbb EP=(K/D)I$ and
$$\mathbb E(P\otimes P)=aI+bF,\qquad a=\frac{K(KD-1)}{D(D^2-1)},\quad b=\frac{K(D-K)}{D(D^2-1)},$$
where $F(u\otimes v)=v\otimes u$.

Here is the finite-coordinate justification of the second identity. An invariant operator commutes with every $U\otimes U$. Commutation with diagonal phase unitaries makes its only possibly nonzero entries those between $|i,j\rangle$ and $|i,j\rangle$ or $|j,i\rangle$. Permutations make the diagonal entries constant on $i=j$ and on $i\ne j$, and the exchanged entries constant. A real rotation in any two coordinate directions, applied to $|i,i\rangle$, forces the diagonal-on-$i=j$ coefficient to equal the sum of the diagonal and exchange coefficients for $i\ne j$. Consequently the operator is $aI+bF$. Its trace and its trace after multiplication by $F$ are respectively $K^2$ and $K$, so $aD^2+bD=K^2$ and $aD+bD^2=K$, giving the displayed values.

The swap identity $\operatorname{tr}(XY)=\operatorname{tr}[(X\otimes Y)F]$, verified on matrix units, now gives
$$\mathbb E\operatorname{tr}[(\omega^W)^2]=\frac{D^2}{K^2}\{a\operatorname{tr}(\omega^2)+b\operatorname{tr}(\omega_E^2)\}.$$
The mean of $\omega^W$ is $K^{-1}I_R\otimes\omega_E$. Subtracting its squared Hilbert–Schmidt norm yields
$$\mathbb E\left\|\omega^W-\frac{I_R}{K}\otimes\omega_E\right\|_2^2
=\frac{D(KD-1)}{K(D^2-1)}\operatorname{tr}(\omega^2)+\frac{1-DK}{K(D^2-1)}\operatorname{tr}(\omega_E^2)
\le2\operatorname{tr}(\omega^2).$$
Positivity implies $\operatorname{supp}\omega\subseteq A\otimes\operatorname{supp}\omega_E$: for a vector in the kernel of the marginal, the sum of the nonnegative diagonal quadratic forms is zero, so all corresponding rows/columns vanish. Therefore the difference above has rank at most $Kr$. Apply $\|X\|_1\le\sqrt{\operatorname{rank}X}\|X\|_2$ (Cauchy–Schwarz on singular values), then Jensen, to prove the first estimate. For the second, write the Jordan decomposition $Z=Z_+-Z_-$. Compression is positive, so its trace norm on $Z$ is at most the sum of the compressed traces of $Z_+,Z_-$. Averaging and using $\mathbb EP=(K/D)I$ gives $\operatorname{tr}Z_++\operatorname{tr}Z_-=\|Z\|_1$.

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

Take $K_n=\lfloor e^{nR}\rfloor$. It is at most $d^n$: subadditivity on the pure Stinespring output implies $s_B\le\ln d+s_E$. If $I_c>0$ then $d\ge2$. For random isometry $W:\mathbb C^{K_n}\to(\mathbb C^d)^{\otimes n}$, let $\rho^W_{RE^n}$ be the environment/reference state produced by encoding half of $|\Phi_{K_n}\rangle$. Coefficient matrices give exactly the normalized-compression expression for the unprojected marginal. Apply the compression estimate to $\omega$, and the averaged trace-contraction estimate to the difference between projected and unprojected marginals. Their environment marginals differ by at most $2\sqrt{\epsilon_n}$. The triangle inequality therefore yields
$$\mathbb E\left\|\rho^W_{RE^n}-\frac{I_R}{K_n}\otimes\mathcal N^c(\tau)^{\otimes n}\right\|_1
\le4\sqrt{\epsilon_n}+\sqrt{2e^{-n(s_B-s_E-R-2\eta)}}\longrightarrow0.$$
A deterministic isometry with this property exists for each $n$: if the expectation is positive, some realization is at most twice its value; if the expectation is zero, the norm is zero almost surely and at least one realization exists.

The product target is purified by $|\Phi_{K_n}\rangle_{RM}\otimes|e_n\rangle_{E^nF}$, with a sufficiently large finite $F$. The actual encoded Stinespring output is another purification on reference/environment versus receiver. Root-fidelity purification characterization, after adding a pure finite ancilla to the receiver if needed, supplies an isometry on the receiver's purifying space whose overlap with that target is the root fidelity of the two marginals. The fixed-purification form follows from the published purification/unitary-equivalence theorem. Fuchs–van de Graaf makes this root fidelity at least one minus half the displayed norm. Trace out the extra decoder factor $F$: the resulting CPTP decoder has squared entanglement fidelity at least the square of that overlap and hence tending to one. The encoder is exactly the isometry $W$; no generating-code/transmitting-code equivalence is assumed.

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
