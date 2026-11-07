---
id: thm-cyclotomic-class-limit-adjoint-characteristic-inversion
kind: theorem
title: Cyclotomic class-limit adjoint and inverse characteristic ideals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels
  - thm-iwasawa-unramified-module-finitely-generated-torsion
  - thm-iwasawa-module-structure-for-finitely-generated-modules
  - lem-weierstrass-division-for-p-adic-power-series
  - def-iwasawa-characteristic-ideal-over-zp-power-series
  - lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
  - def-pontryagin-dual-and-compact-open-topology
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
sources:
  references:
    - title: Romyar Sharifi, Iwasawa Theory
      url: https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html
      locator: Proposition 3.2.15 and Corollary 3.2.16; the finite-error and cyclic adjoint calculations are supplied locally.
    - title: Romyar Sharifi, Iwasawa Theory, module theory
      url: https://www.math.ucla.edu/~sharifi/notes/iwasawa-ch02.html
      locator: Section 2.6, Definition 2.6.6 and Theorem 2.6.14.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $F$ be totally real, $p$ odd, $K=F(\mu_p)$ and $K_\infty=F(\mu_{p^\infty})$. Write $\operatorname{Gal}(K_\infty/F)=\Delta\times\Gamma$ with finite cyclic $\Delta$ of order prime to $p$ and $\Gamma\cong\mathbb Z_p$, choose $\gamma\in\Gamma$ and put $R=\mathbb Z_p\llbracket T\rrbracket$ with $T=\gamma-1$. Let $X_\infty$ be the norm inverse limit and $A_\infty$ the extension direct limit of the $p$-primary ideal class groups of the finite cyclotomic layers of $K$. Give $A_\infty^\vee=\operatorname{Hom}(A_\infty,\mathbb Q_p/\mathbb Z_p)$ the contragredient action. For every $\mathbb Z_p$-valued character $\eta$ of $\Delta$, the module $e_{\eta^{-1}}A_\infty^\vee$ is finitely generated torsion over $R$ and
$$\operatorname{char}_R(e_{\eta^{-1}}A_\infty^\vee)=\iota\bigl(\operatorname{char}_R(e_\eta X_\infty)\bigr),\qquad \iota(T)=(1+T)^{-1}-1.$$
No vanishing of an Iwasawa $\mu$-invariant is assumed.

## Statement references

[[lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels]]

[[thm-iwasawa-unramified-module-finitely-generated-torsion]]

[[thm-iwasawa-module-structure-for-finitely-generated-modules]]

[[lem-weierstrass-division-for-p-adic-power-series]]

[[def-iwasawa-characteristic-ideal-over-zp-power-series]]

## Facts & Assumptions

**Given:** The original choice assumptions, $F,p,K$, tower, group actions and $\eta$ in the Statement.

[F1] The recorded cyclotomic class-field inertia lemma gives, beyond one layer $m$, surjections $X_\infty\to A_n$ with kernels $Y_n=(\gamma^{p^n}-1)X_\infty+\sum_i\mathbb Z_p\nu_{n,m}g_i$, where $\nu_{n,m}=\sum_{j=0}^{p^{n-m}-1}\gamma^{jp^m}$. [[lem-totally-imaginary-cyclotomic-class-field-inertia-trace-kernels]]

[F2] The full unramified module and its finite-character components are finitely generated torsion over $R$. [[thm-iwasawa-unramified-module-finitely-generated-torsion]]

[F3] Every finitely generated torsion $R$-module is pseudo-isomorphic to a finite direct sum of $R/(p^a)$ and $R/(f^b)$ with $f$ distinguished irreducible, with finite kernel and cokernel. [[thm-iwasawa-module-structure-for-finitely-generated-modules]]

[F4] Division by a distinguished monic polynomial of degree $d$ gives a unique remainder of degree below $d$ and a free $\mathbb Z_p$-module quotient of rank $d$. [[lem-weierstrass-division-for-p-adic-power-series]]

[F5] The characteristic ideal is the finite height-one prime product with exponents given by localization lengths. [[def-iwasawa-characteristic-ideal-over-zp-power-series]]

[F6] The finite factor $\Delta$ is cyclic of order dividing $p-1$, its characters are $\mathbb Z_p$-valued, and the idempotents $e_\eta$ exist. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F7] Pontryagin duality uses continuous homomorphisms to $\mathbb Q_p/\mathbb Z_p$ with the contragredient action. [[def-pontryagin-dual-and-compact-open-topology]]

[A1] AC, Countable Choice and Dependent Choice are the hypotheses of the finite class-field and inertia inputs. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** The actual inertia trace control, finite-error comparison of trace adjoints, and elementary cyclic-factor duality.

1.1 Put $\omega_n=\gamma^{p^n}-1$ and $\nu_{n,m}=\omega_n/\omega_m$. By [F1], choose $m$ so its trace-kernel formula holds. Then $Y_m=\omega_mX_\infty+\sum_i\mathbb Z_pg_i$ and multiplication by $\nu_{n,m}$ gives $Y_n=\nu_{n,m}Y_m$. For ideal extension $j_{n+1,n}$ and norm $N_{n+1,n}$, the product of the Galois conjugates of an ideal is the extension of its norm; hence $j_{n+1,n}N_{n+1,n}=\nu_{n+1,n}$ on class groups. The extension maps in $A_\infty$ are consequently induced by multiplication by $\nu_{n+1,n}$ on $X_\infty/Y_n$. Apply the exact idempotent $e_\eta$ throughout; it commutes with the norm, extension and trace maps. [F1, F6, A1, given, construct, algebra]

2.1 For $n\ge m$, the exact sequences $0\to Y_m/\nu_{n,m}Y_m\to X_\infty/\nu_{n,m}Y_m\to X_\infty/Y_m=A_m\to0$ commute with those trace transitions. On the finite group $A_m$, $\Gamma^{p^n}$ acts trivially for large $n$, so the transition trace is multiplication by $p$ and the direct limit of the right term is zero. Filtered direct limits are exact by a finite representative chase. Thus $e_\eta A_\infty\cong\varinjlim_n e_\eta Y_m/\nu_{n,m}e_\eta Y_m$. Its Pontryagin dual is the inverse limit of the finite-level duals, and the contragredient $\Delta$ action changes the character to $\eta^{-1}$. This proves the class-limit identification from the trace formula of step 1.1. [F1, F6, F7, step 1.1, construct, algebra]

3.1 Write $M=e_\eta X_\infty$. By [F2]–[F3], increase $m$ if necessary so that the finitely many distinguished factors of $M$ have no cyclotomic factor of order exceeding $p^m$; the relation $Y_n=\nu_{n,m}Y_m$ and the identification of step 2.1 remain true after this increase. Put $Y=e_\eta Y_m$. Then $M/Y$ is finite by [F1]. For every $\nu=\nu_{n,m}$, the map $Y/\nu Y\to M/\nu M$ has kernel a quotient of $(M/Y)[\nu]$ and cokernel a quotient of $M/Y$, so both orders are bounded by $|M/Y|$ independently of $n$. Their filtered direct limits remain finite of that same bound: any finite set of classes is represented at one common stage. Dualizing reverses the resulting finite-error exact sequences; a character of a subgroup extends to the ambient discrete abelian group because $\mathbb Q_p/\mathbb Z_p$ is divisible, using AC on one extension problem. Hence the trace adjoints of $Y$ and $M$ differ by finite kernel and cokernel. Then $M/\nu_{n,m}M$ and $Y/\nu_{n,m}Y$ are finite: on a factor $R/(p^a)$ the quotient is finite because $\nu_{n,m}$ reduces to a power of $T$ modulo $p$, and on $R/(f^b)$ it is a finite cokernel of a nonzero-determinant endomorphism of the finite free $\mathbb Z_p$-module from [F4]. The finite errors of the pseudo-isomorphism preserve this finiteness. [F1, F2, F3, F4, A1, step 1.1, step 2.1, construct, algebra]

4.1 Define the trace adjoint $\alpha(M)$ to be the Pontryagin dual of $\varinjlim_n M/\nu_{n,m}M$ with transition multiplication by $\nu_{n+1,n}$ and the contragredient $\Gamma$ action. For a pseudo-isomorphism between finite torsion modules, the kernels and cokernels after any quotient by $\nu_{n,m}$ are bounded by the finite kernel and cokernel: factor through the image, use the finite connecting group of the cokernel, and use right exactness for the remaining quotient. The same common-stage argument as step 3.1 and Pontryagin duality therefore give a finite-kernel/cokernel comparison between trace adjoints. Apply [F3] and calculate the finite direct sum factor by factor. Since finite modules vanish after localization at every height-one prime of $R$, finite kernel and cokernel do not change [F5]'s characteristic ideal. [F3, F5, F7, A1, step 3.1, construct, algebra]

5.1 For $C=R/(p^a)$ let $B_n=(\mathbb Z/p^a)[\Gamma/\Gamma_n]=R/(p^a,\omega_n)$. The coefficient-of-identity pairing, with inversion on $\Gamma$, is perfect on each finite group ring. Multiplication by $\omega_m$ identifies $C/\nu_{n,m}C$ with the ideal $\omega_mB_n$. Its annihilator is $\nu_{n,m}B_n$: $\omega_m$ is a non-zero-divisor on $R/(p^a)$ because it reduces to a power of $T$ modulo $p$, and $\omega_n=\omega_m\nu_{n,m}$. Thus the dual of that ideal is $B_n/(\nu_{n,m})$, with inverse action. The dual of each trace transition is the natural reduction. The factorization $\nu_{n+1,m}=\nu_{n,m}\sum_{j=0}^{p-1}(1+\omega_n)^j$ puts $\nu_{n,m}$ in $(p,T)^{n-m}$, because each new factor lies in $(p,T)$. Conversely $\nu_{n,m}\equiv T^{p^n-p^m}\pmod p$, so a sufficiently high power of $(p,T)$ lies in $(p^a,\nu_{n,m})$: repeatedly replace $T^{p^n-p^m}$ by a multiple of $p$ modulo $\nu_{n,m}$. Thus these ideals are cofinal with the $(p,T)$-adic topology modulo $p^a$. Hence $\alpha(C)\cong R/(p^a)$ with inverse $\Gamma$ action, and its characteristic ideal is $(p^a)=\iota((p^a))$. Use the finite-factor reduction of step 4.1. [F3, F5, F7, step 4.1, construct, algebra]

5.2 For $C=R/(f^b)$ with $f$ distinguished irreducible, [F4] makes $C$ finite free over $\mathbb Z_p$. The choice of $m$ in step 3.1 makes each $\nu_{n,m}$ invertible on $C\otimes\mathbb Q_p$. The maps $x\bmod\nu_{n,m}C\mapsto x/\nu_{n,m}\bmod C$ identify the trace direct system with the increasing union of the subgroups $\nu_{n,m}^{-1}C/C$ in $(C\otimes\mathbb Q_p)/C$. To see that this union is all of the latter, extend scalars to a finite splitting field of $f$ and decompose into its finitely many local Artin root factors. Write $\gamma=\xi(1+N)$ on one factor, with $N$ nilpotent. If $\xi$ is a $p$-power root of unity, its order is at most $p^m$ by the choice of $m$; putting $V=\gamma^{p^m}-1$, the finite binomial sum $\nu_{n,m}/p^{n-m}$ tends to $\log(1+V)/V$, a unit with constant term one. If $\xi$ is not a root of unity, $\gamma^{p^m}-1$ is invertible and the same normalized sums tend to $p^m\log(\gamma)/(\gamma^{p^m}-1)$, whose residue is nonzero because the kernel of the $p$-adic logarithm on principal units consists of $p$-power roots of unity. The finitely many limiting operators are units; their matrices and inverses are uniformly bounded for large $n$. For some fixed $C_0$, this gives $p^{n+C_0}C\subseteq\nu_{n,m}C\subseteq p^{n-C_0}C$. Hence the union of inverse lattices is $(C\otimes\mathbb Q_p)/C$. [F3, F4, step 3.1, step 4.1, construct, algebra]

6.1 The dual of $(C\otimes\mathbb Q_p)/C$ is $\operatorname{Hom}_{\mathbb Z_p}(C,\mathbb Z_p)$ with inverse $\Gamma$ action. If $P=f^b$ has degree $d$, the pairing $\langle a,b\rangle=\operatorname{coef}_{T^{d-1}}(ab\bmod P)$ on $R/(P)$ is perfect: in the basis $1,T,\ldots,T^{d-1}$ its matrix is anti-triangular with ones on the anti-diagonal. It is $R$-balanced, so the ordinary $\mathbb Z_p$-dual is isomorphic to $R/(P)$; after inversion its characteristic ideal is $\iota((f^b))$. Combining this with step 5.1 and the finite-error calculation of step 4.1 gives $\operatorname{char}_R\alpha(M)=\iota(\operatorname{char}_R M)$. Finally step 2.1 identifies $\alpha(Y)$ with $e_{\eta^{-1}}A_\infty^\vee$, and step 3.1 makes its characteristic ideal equal to that of $\alpha(M)$. This proves the displayed formula without discarding any $p$-power factor. [F4, F5, F6, F7, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2, algebra, discharge-construct] ∎
