# The exact negative-order divergence lifting needed by the discrete retraction

## Verified source and boundary convention

Costabel and McIntosh, *On Bogovskii and regularized Poincare integral operators for de Rham complexes on Lipschitz domains*, arXiv:0808.2614, complete PDF <https://arxiv.org/pdf/0808.2614>. The fractional-projection helper retrieved the PDF. I extracted it and inspected the definitions of supported Sobolev spaces and their duals in section 2; the relevant support/mapping statements in section 3; Lemma 4.3, Theorem 4.6 with its complete proof and Corollaries 4.7–4.8; and the statements and top-degree interpretation of Theorem 4.9. No claim of independently checking the paper's entire pseudodifferential-symbol proof is made. A copy of the PDF and extraction is retained here.

The source uses H^s_closure(D)(R^d) for distributions on R^d supported in closure(D), and H^s(D) for restrictions to D. It states explicitly that the first is naturally isomorphic to the dual of H^(-s)(D). Thus the supported H^(-1) space is the dual of **H1(D)**, not the dual of H1_0(D). This is the boundary distinction required here.

For a bounded connected Lipschitz D, the source gives a single fixed support-preserving operator T_n, of order -1, and a smoothing finite-rank L_n satisfying

    T_n:H^s_closure(D)(R^d,topforms)
           ->H^(s+1)_closure(D)(R^d,(n-1)-forms),
    div T_n f=f-L_n f,

for every real s, including s=-1 and s=0. These are Theorem 4.6(i)–(iii), printed pp.16–17. Top-degree forms are identified with scalar functions and (n-1)-forms with vector fields using the usual fixed orientation/sign convention. The same T_n and L_n act at both orders.

## Construction of one common exact lifting

Let

    F_D={F in (H1(D))*: F(1)=0},

with its dual norm. This is equivalently the dual of H1(D)/R, with equivalent quotient norms. Define the canonical supported extension by

    <E F,phi> = F(phi|D),    phi in H1(R^d).

Restriction is bounded, so E maps F_D boundedly into H^(-1)(R^d), with support in closure(D). It is one fixed linear extension. If F is represented by a mean-zero L2 function, E F is precisely its ordinary zero extension, hence is also in supported L2. The mean of E F is zero: pair it against any smooth compactly supported cutoff equal to one near closure(D).

For such F put w=T_n E F. Its support lies in closure(D), and its global distributional divergence is E F-L_n E F. Pairing div w with the same cutoff gives zero, since the cutoff gradient vanishes on a neighborhood of supp w. Therefore

    integral_(R^d) L_n E F=0.

Let W be the finite-dimensional subspace of the range of L_n consisting of zero-mean functions. All its members are smooth supported functions, in particular in L2_0(D). Choose one fixed linear positive-order lifting B0:W->H1_0(D)^d with div B0 g=g. Such a choice uses only the ordinary already-established L2 divergence lifting on a bounded connected Lipschitz domain, restricted to a finite-dimensional subspace: choose preimages of a basis and extend linearly. Consequently B0 is bounded from W with its L2 norm to H1_0(D). No additional smoothness of these chosen preimages is required.

Now define one common operator

    B F = [T_n E F + zero_extension(B0 L_n E F)]|D.             (1)

Its divergence on R^d is exactly E F, and hence on D is F. More precisely the global identity includes the required zero normal flux: for every q in H1(D),

    -(B F,grad q)_2=F(q),                                    (2)

when F is interpreted with the usual distributional divergence sign. To justify testing with arbitrary q, extend q to H1(R^d), multiply by a cutoff equal to one near closure(D), and use the supported global identity; the result is independent of the chosen extension because E F was defined by restriction.

At negative order, T_n:H^(-1)_support->L2_support and smoothing of L_n give

    ||B F||L2(D) <= C ||F||_(H1(D)/R)*.                       (3)

At order zero, T_n:L2_support->H1_support, while B0 L_n maps L2 into H1_0, so for f in L2_0(D),

    B f in H1_0(D)^d,
    ||B f||H1(D) <= C ||f||L2(D).                            (4)

On a Lipschitz domain, H1 functions on R^d supported in closure(D) restrict to H1_0(D); this is also consistent with the source's supported-space identification. Thus (3)–(4) concern the **same linear operator**, and their actions agree on the shared L2_0 input class.

## Consequence for the helper's proposed actual-space projection

The proposed input is F=J_h* div v_h, defined by

    F(q)=(div v_h,J_h q)_2,

where J_h is a fixed pressure-space projection preserving constants, L2 bounded and H1 bounded. Since v_h is no slip, integration by parts gives

    F(1)=0,
    ||F||L2(D) <= C ||v_h||V,
    ||F||_(H1/R)* <= C ||v_h||L2(D).

The first L2 estimate follows by dualizing the L2 bound for J_h; the second follows from F(q)=-(v_h,grad J_h q). Equations (3)–(4) therefore supply exactly the common divergence lift with the two estimates needed by the helper's oblique-retraction construction. If v_h is in Z_h and J_h maps into Q_h plus constants, then F=0 exactly.

This source check verifies the negative-order lifting interface. The actual finite-element projection construction and fractional norm comparison remain owned by the fractional-projection helper. No claim of H1 stability of the L2-orthogonal Leray projector follows from this oblique construction.

Only research source files and this note were written. No canonical content, metadata, manifests, hashes, runtime controls, tests or gates were changed or run.
