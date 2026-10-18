# Reflection covariance of the actual two-driver average

Research-only, 2026-10-18. This is an exact symmetry identity, not a nonextinction theorem or an assertion that arbitrary actual states belong to the two-driver range.

Use the actual mirrored two-fan template of reflection-normalized-coarse-bubble-sources.md. Assume the ring/transition geometry, prescribed far/base incident traces, pressure gauge at the root, and child recursion are chosen equivariantly under reflection S(x,y)=(-x,y). The two velocity drivers transform by the matrix S=diag(-1,1). Scalar pressure transforms by composition with S. The independently extracted incoming normal/tangential affine field transforms in the same vector representation; this is necessary and excludes an asymmetric arbitrary choice of normal extractor.

Let U be the induced twenty-state reflection matrix (node permutation, vector S on velocities, scalar composition and root regauging on pressure). Actual mass equations and all retained reaction rows are invariant. Thus D, J_R and F_R obey

    U^T D U=D,    U^T J_R U=J_R,    U^T F_R S=F_R,

with the corresponding coordinate convention for loads. Equivalently, use direct uniqueness of the reflected glued solution to avoid any ambiguity between the primal state transformation and its contragredient reaction transformation. Reflection of the exact solution with driver eta is the exact solution with driver S eta. Consequently the exact embedding satisfies

    E_R(D) S=U E_R(D).                                  (1)

Let children c and c' be reflected partners. Choose their local frames by the same reflection-equivariant convention, including pressure/r scaling and gauge removal. Actual recovery and incoming macro extraction commute with reflection. The exact driver projection Pi, namely base velocity minus the incoming macro vector, also commutes with reflection. Therefore their reduced recovery matrices satisfy

    M_c' = S M_c S.                                     (2)

For any reflection-invariant child weights w_c (equal for each paired child), the averaged matrix is

    Mbar=(sum w_c)^(-1) sum w_c M_c,
    S Mbar S=Mbar.

Since the two diagonal entries of S are distinct, this gives EXACTLY

    Mbar=diag(m_t,m_n).                                 (3)

Thus a direct estimate on m_t is not degraded by a possibly large normal row through a generic two-dimensional determinant argument. If one has an exact closed two-driver recurrence, the averaged tangential driver evolves by m_t independently of the normal driver.

The crucial conditional phrase is “exact closed two-driver recurrence.” For actual boundary states s=E_R(D)eta+r, the recovered children contain the additional terms T_c r and the incoming-extractor contribution from r. Symmetry alone does not make those terms zero; it only splits them into their parity sectors. The entire odd twenty-state sector is larger than one dimension. No spectral lower bound for the actual full map, no invariant graph, and no source-supported mass H^s divergence follows from (3) alone. A quantitative ring-complement closure or an exact invariant subspace is still required.

Similarly, mirror symmetry must hold for the ACTUAL constrained filler and uniform rings, not only for their fan drawings. One may enforce it by reflecting the complete half-template triangulation and pairing all refinements, including the sharp root collars. In particular, a southwest-to-northeast diagonal uniform grid reflects to a northwest-to-southeast diagonal grid. The two protected fan zones must therefore use these MIRRORED grids, not a single globally fixed diagonal orientation. Their operator kernels and incoming affine extractors are related by the reflected coordinates; the reflected physical-velocity value defines the normal extractor. This is compatible with the already required four-source reflection hypothesis but remains part of the chosen geometry.

## Current application audit: single-diagonal radiation exterior

The exact diagonal-average conclusion above REQUIRES the SAME ideal exterior operator to commute with reflection. A single southwest-to-northeast uniform halfplane does not satisfy that hypothesis; reflection gives the northwest-to-southeast operator. For the current radiation choice E_infty^SW, pairing alone yields the odd columns

    E_t^-=(E_t^SW-U E_t^SW)/2,
    E_n^-=(E_n^SW-U E_n^SW)/2.

The second need not be zero. It is not valid to cancel it solely by conjugating the two driver coordinates. The current repair route is a proved-to-be-required exterior Darcy/Mosco comparison, on COMPATIBLE free twelve ports, making E_n^- arbitrarily small as the exterior mesh width tends to zero after N is fixed. This comparison is being supplied separately; until it is proved, the actual odd complement budget needs an additional term ||E_n^-|| times the controlled normal-driver functional. No spectral certificate may omit that term.

For the tangent column, E_t^- is an exact odd actual child response, has L_t(E_t^-)=1, and has the same sharp energy upper bound by reflection-isometry and the same root/trace lower bound. Hence the bounded odd rank-one projection can use E_t^- immediately, even before the normal defect is shown small. The original finite-ring calculation is historical; the assembled halfplane proof uses the radiation-consistent E_infty construction.
