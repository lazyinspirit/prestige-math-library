Canonical lines 22--24:

    - title: "Lassas, Liimatainen, Lin, and Salo, Inverse problems for elliptic equations with power type nonlinearities (2019 preprint; 2021 publication)"
      url: "https://arxiv.org/pdf/1903.12562v1"
      locator: "Proposition 5.1, PDF p. 14 (density of products of at least four smooth harmonic functions); proof in Section 5, pp. 14-22. Current reading pp. 14-20 only. DOI 10.1016/j.matpur.2020.11.006."

Canonical lines 60--62:

[F3] **External input:** Lassas--Liimatainen--Lin--Salo, Proposition 5.1, arXiv:1903.12562v1, PDF p. 14: on a compact oriented transversally anisotropic manifold of dimension at least three, if $f\in C^1(M)$ satisfies $\int_M f v_1\cdots v_m\,dV=0$ for all smooth harmonic $v_j$, with $m\ge4$, then $f=0$. We import this density statement. The statement and proof through PDF p. 20 were inspected; the remaining proof through p. 22 is not claimed read or reconstructed here. The simple surface is diffeomorphic to a disk, hence oriented, so its product and $M$ meet the source orientation hypothesis.

[F4] The literal quantifiers in the statement permit the four witnesses to depend on $Q$. They impose no uniformity in $Q$, no nonzero-solution requirement, and no quantitative remainder or beam-profile estimate. The proof below uses density to obtain smooth witnesses constant in $\tau$; it does not assert a uniform Gaussian-beam family. The Gaussian calculation fixes the allowed positive geometric normalization.

Canonical lines 70--70:

2.1 Fix unit tangent vectors $e_1,e_2$ at the crossing and their normal linear forms $\ell_1,\ell_2$ on the tangent plane. Their determinant has absolute value $|\sin\angle(e_1,e_2)|$. The normalized Gaussian

Canonical lines 72--72:

has integral $c=|\sin\angle(e_1,e_2)|^{-1}>0$, by the linear substitution $z_j=\sqrt\tau\,\ell_j(y)$. Choose this unit Gaussian normalization for the constant in the statement. This calculation fixes $c$ and does not claim estimates for any exact-solution beam remainders. [F1, F4, step 1.1, algebra]

Canonical lines 74--76:

2.2 Put $T=c\int_{I_p}e^{-i\xi x_1}Q(x_1,p)\,dx_1$, which is finite because $M$ is compact and $Q$ is bounded. If $Q=0$, four constant harmonic functions give the assertion. Otherwise [F3], by contraposition, gives smooth harmonic functions $w_1,w_2,w_3,w_4$ with $S=\int_M Qw_1w_2w_3w_4\,dV\ne0$. For every $\tau$ set
$$u_{\tau,1}^+=(T/S)w_1,\quad u_{\tau,1}^-=w_2,\quad u_{\tau,2}^+=w_3,\quad u_{\tau,2}^-=w_4.$$
They are exact harmonic smooth functions, hence belong to $H^1(M)$, with no prescribed boundary values. Their product integral equals $T$ for every $\tau$, so the required limit holds. This includes $T=0$. These are explicitly $Q$-dependent, constant-parameter witnesses; no estimate stronger than the unchanged statement is inferred from the $L^2$ CGO bound. [A1, A2, F3, F4, step 2.1, algebra] ∎
