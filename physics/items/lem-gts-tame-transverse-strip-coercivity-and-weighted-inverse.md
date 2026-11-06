---
id: lem-gts-tame-transverse-strip-coercivity-and-weighted-inverse
kind: lemma
title: Tame transverse-strip coercivity and actual weighted end inverse
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-countable-choice
- thm-plancherel
- def-sobolev-space-wkp-and-its-norm
- def-gts-lagrangian-intersection-and-hamiltonian-chord-data
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-plancherel: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-gts-lagrangian-intersection-and-hamiltonian-chord-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves
    url: https://arxiv.org/pdf/1309.2370v6
    locator: Appendix B.1–B.2, printed pp. 136–141, provides closed-curve gluing and neck-coordinate context only. The tame transverse-strip coercive estimate, onto inverse and weighted perturbation argument are proved locally below, not attributed to a Pardon strip theorem.
dependency_level: 1
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Strip spaces and traces

Fix a Euclidean norm on $V$. Write $S^\circ=\mathbb R\times(0,1)$ and $H^k(S,V)=W^{k,2}(S^\circ;V)$: weak derivatives are defined in each real coordinate of $V$, and the squared norm is the sum of their squared $L^2$ norms through order $k$. For $\xi\in H^1$, define $T_j\xi$ as the $L^2(\mathbb R;V)$ limit of $\xi(\cdot,t)$ as $t\to j$ from the interior. These limits exist: the weak normal derivative gives an $L^2(\mathbb R;V)$-valued absolutely continuous representative on interior intervals, and $\|\xi(\cdot,t)-\xi(\cdot,r)\|_2\le|t-r|^{1/2}\|\xi_t\|_{L^2(\mathbb R\times(r,t))}$. The primitive identity follows coordinatewise by testing the weak derivative and subtracting its integral; a distribution with zero derivative is constant. Averaging the primitive formula over an interior interval also gives $\|T_j\xi\|_2\le C\|\xi\|_{H^1}$. For $k\ge1$, set $H^k(S,V;F_0,F_1)=\{\xi\in H^k(S,V):T_j\xi(s)\in F_j\text{ for almost every }s,\ j=0,1\}$. This is a closed linear subspace. Weighted spaces mean that multiplication by the stated positive weight belongs to these spaces; the boundary condition is preserved by this scalar multiplication.

## Statement

Assume Countable Choice. Let $(V,\omega)$ be a finite-dimensional real symplectic vector space, $F_0,F_1$ transverse Lagrangian planes, and $J_t$ a smooth $\omega$-tame family on $0\le t\le1$. On $S=\mathbb R\times[0,1]$ set $P\xi=\xi_s+J_t\xi_t$ and require traces $\xi(s,j)\in F_j$. For every integer $k\ge1$,
$$P:H^k(S,V;F_0,F_1)\longrightarrow H^{k-1}(S,V)$$
is an isomorphism, with $\|\xi\|_{H^k}\le C_k\|P\xi\|_{H^{k-1}}$. No selfadjointness or compatibility of $J_t$ is assumed.

For smooth $\chi$ with $|\chi'|\le1$ and bounded higher derivatives, the same holds in the norms $\|e^{\delta\chi}\xi\|_{H^k}$ and $\|e^{\delta\chi}f\|_{H^{k-1}}$ for sufficiently small $|\delta|$, including $\chi=s$ and a smoothing of $|s|$. The constants are uniform on compact smooth families of tame structures and transverse planes. The frozen end operator along a nondegenerate Hamiltonian chord has the same assertion after symplectic-flow conjugation.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice and exactly the data and hypotheses of the Statement. The proof uses Countable Choice through Plancherel and the Sobolev conventions, together with finite-dimensional estimates, Fourier inversion, and the explicitly constructed one-dimensional ODE solution; it uses no arbitrary-index choice.

[F1] Under Countable Choice, [[thm-plancherel]] gives the partial Fourier norm and inversion. The finite-dimensional ODE solution and its boundary linear system are constructed below.

[F2] [[def-sobolev-space-wkp-and-its-norm]] fixes the scalar weak derivative convention; the finite-dimensional spaces and continuous traces are defined above, and trace-preserving density and higher estimates are proved below. The explicitly constructed inverse and its norm estimate below already prove boundedness; no abstract bounded-inverse theorem is needed.

[F3] [[def-gts-lagrangian-intersection-and-hamiltonian-chord-data]] fixes the convention $\iota_{X_H}\omega=-dH$ and the precise transverse nondegenerate endpoint planes.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 Choose a fixed Euclidean norm on $V$. Compactness of the interval/unit sphere gives $c>0$, $M<\infty$ with $\omega(v,J_tv)\ge c|v|^2$ and $|J_t|+|\omega|\le M$. There is a boundary Poincaré constant $B$: the map $F_0\oplus F_1\to V$, $(a,b)\mapsto b-a$, is an isomorphism. For a path $v(t)$ with endpoints in the two planes, $|v(0)|\le B|v(1)-v(0)|\le B\|v_t\|_2$, and the fundamental theorem then gives $\|v\|_2\le(B+1)\|v_t\|_2$. The same estimates hold after complexification, applied to real and imaginary parts. [given, construct, algebra]

2.1 First take a smooth section compactly supported in $s$ and satisfying the real boundary traces. The radial primitive $\lambda_V=\frac12\omega(x,dx)$ restricts to zero on each linear Lagrangian plane. Stokes on a sufficiently long finite strip gives $\int_S\omega(\xi_s,\xi_t)=0$; the horizontal-edge integrals vanish and the two remote vertical-edge integrals are zero. If $f=P\xi$, it follows exactly that $\int_S\omega(\xi_t,J_t\xi_t)=-\int_S\omega(f,\xi_t).$ Hence $c\|\xi_t\|_2^2\le M\|f\|_2\|\xi_t\|_2$. Thus $\|\xi_t\|_2\le(M/c)\|f\|_2$, $\|\xi_s\|_2\le(1+M^2/c)\|f\|_2$, and step 1.1 controls $\|\xi\|_2$. Therefore $\|\xi\|_{H^1}\le C\|P\xi\|_2$, with no spectral or selfadjointness assumption. [given, construct, algebra, step 1.1]

3.1 This estimate holds for every $H^1$ section with these traces. For density, near edge $j$ extend across it by the real linear reflection $2\Pi_{F_j}-I$. The boundary trace condition makes the extension $H^1$ with matching values. Use an even normal mollifier so its smoothed boundary value remains fixed by the reflection, hence belongs to $F_j$. A real partition near the two disjoint edges and a compact $s$ cutoff give the required smooth approximants. Their $H^1$ convergence passes step 2.1 to the limit. [F2, given, construct, algebra, step 2.1]

4.1 To prove surjectivity, Fourier transform only in $s$. For $\tau\in\mathbb R$, consider $D_\tau\psi=i\tau\psi+J_t\psi',\qquad\psi(0)\in(F_0)_\mathbb C,\quad\psi(1)\in(F_1)_\mathbb C.$ For $\tau\ne0$, apply step 2.1 to the REAL periodic map $\operatorname{Re}(e^{i\tau s}\psi(t))$ on one $s$-period. Its vertical-side integrals cancel by periodicity, so the estimate is unchanged, independently of the period length. Average the squared norms over that period. It gives $\|\psi\|_{H^1_t}+|\tau|\|\psi\|_2\le C\|D_\tau\psi\|_2.$ For $\tau=0$, apply the same calculation separately to its two real parts, constant in $s$. Thus this uniform estimate holds for ALL real $\tau$. [given, construct, algebra, step 3.1]

5.1 The one-dimensional boundary operator $D_\tau$ is onto. Solve $\psi'=i\tau J_t\psi-J_tf$ with an initial vector in $(F_0)_\mathbb C$. The fundamental matrix exists by its convergent iterated-integral series, whose $r$-th term is bounded by $(|\tau|M)^r/r!$ on the unit interval. Variation of constants gives all $H^1$ solutions for an $L^2$ forcing. Their endpoint condition is a square linear system from the $n$-dimensional complex initial plane to the $n$-dimensional quotient $V_\mathbb C/(F_1)_\mathbb C$. Its kernel is zero by step 4.1, so its matrix is invertible. The solution is unique, depends continuously on $\tau$, and has precisely the uniform bound in step 4.1. [given, construct, algebra, step 4.1]

6.1 For $f\in L^2(S,V)$, set $\widehat\xi(\tau)=D_\tau^{-1}\widehat f(\tau)$. Continuity in $\tau$ gives measurability; the uniform estimate and Plancherel give $\xi,\xi_s,\xi_t\in L^2$. The endpoint conditions hold in the $H^1_t$ trace and therefore in the full strip trace. Reality follows from conjugating the equation at $\tau$ to that at $-\tau$. Thus $\xi\in H^1(S,V;F_0,F_1)$ and $P\xi=f$. Step3 gives uniqueness. This is an actual onto inverse, rather than a coercive estimate falsely treated as surjectivity. [F1, F2, given, construct, algebra, step 5.1]

7.1 For higher orders, $P$ commutes with $\partial_s$. Step6 applied to $\partial_s^j f$ controls $\partial_s^j\xi$ in $H^1$ for $j\le k-1$. Recover every additional normal derivative from $\xi_t=J_t\xi_s-J_tf$. Differentiate this identity and induct on the number of $t$ derivatives, using the bounded derivatives of $J_t$. Every total derivative through order $k$ is controlled by the derivatives of $f$ through order $k-1$. This proves the stated $H^k$ inverse and smoothness up to the two edges for smooth forcing, without imposing artificial boundary compatibility on $f$. [F2, given, construct, algebra, step 6.1]

8.1 Conjugation by $w=e^{\delta\chi}$ gives $wPw^{-1}=P-\delta\chi'$. The bounded zeroth-order perturbation has norm at most $|\delta|$ from $H^1$ to $L^2$. If $|\delta|\|P^{-1}\|_{L^2\to H^1}<1/2$, its inverse is the norm-convergent Neumann series with norm at most twice that of $P^{-1}$. Commuting derivatives gives higher estimates as in step 7.1; derivatives of $\chi'$ are bounded, and the lower derivatives are already controlled inductively. This proves the weighted assertion. All constants depend continuously on the finite-dimensional plane angle/tameness bounds and finitely many coefficient derivatives, so are uniform on the stated compact families. [given, construct, algebra, step 7.1]

9.1 Along a Hamiltonian chord $\gamma(t)=\Phi_H^t(p)$, the symplectic linearized flow sends the two endpoint tangent conditions to the fixed planes $T_pL_0$ and $(D\Phi_H^1)^{-1}T_{\gamma(1)}L_1$. They are transverse exactly by chord nondegeneracy. Conjugating the actual frozen Floer linearization by this flow removes its Hamiltonian zeroth-order evolution term, and sends $J_t$ to the tame structure $(D\Phi_H^t)^{-1}J_tD\Phi_H^t$. Its principal part is precisely the operator above. Smooth bounded flow matrices on the compact interval preserve all stated norms. This supplies the actual weighted end inverse required by the forthcoming regular polygon collar construction. [F3, given, construct, algebra, step 8.1] ∎

## Remarks

This is a linear end inverse. It assumes no polygon compactification, nonlinear gluing or orientation theorem. The proof works for tame J and does not import a compatible selfadjoint spectral argument.
