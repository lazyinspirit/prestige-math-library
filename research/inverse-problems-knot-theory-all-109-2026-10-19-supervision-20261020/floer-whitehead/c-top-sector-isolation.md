# The actual C corner operation at the D0 junction

This is a mathematical donor for original94, not a completed endpoint computation or an acceptance record. It uses the actual positive ribbon in `owner-tau-whitehead-computation/items/lem-positive-whitehead-pattern-has-the-explicit-five-handle-ribbon-model.md` and that directory's meridian-filling Euler donor. Both remain author-stage. The new argument below supplies the complete C region calculation. No longitude disk count, full companion admission, or absolute Maslov parity is inferred from it.

Use the positive ribbon signs, the clockwise/right face enumeration of `eftekhary-unified-ribbon-development.py`, and the physical marks W=F7 and Z=F2 adjacent to the specified short N edge. At a vertex v write r_v=1_target(v)-1_source(v). The alternating corner equation is r_v, not its negative. If D=(D0,...,D9) is the restriction of an actual smooth Whitney domain to C, four literal vertex equations are

    r_b  = D1-D3+D4-D6,
    r_a′ = D4-D5+D7-D8,
    r_d  = -D1+D2+D6-D8,
    r_r  = D3-D5.

Consequently, by adding these equations with coefficients (-1,1,-1,-1),

    D_W-D_Z = -r_b+r_a′-r_d-r_r.                    (1)

This identity has no equation at the puncture Q. It therefore remains valid after the actual connected-surface companion gluing at Q, regardless of the companion domain. The marks stay on the same C faces. For a domain from x to y the physical field convention gives A(y)-A(x)=n_w-n_z. Combining with (1) proves that the grading contribution of a partial pattern matching S is

    a(S) = -1_S(b)+1_S(a′)-1_S(d)-1_S(r).          (2)

In particular this computation has no additive contribution depending on which companion generator is attached. To turn (2) into absolute A, the anchor must still be an actual full state. The unchanged-port and changed-pairing Euler donor specifies such an anchor: M extends ncgqe and has A=0; the changed-pairing state L extends acgmq and has A=0. Equation (1) computes every relative change from those actual states. It is not legitimate to substitute an unadmitted printed state label for either anchor.

The product collar disks have boundaries lambda#mu and gamma#ell, as constructed in the ribbon donor. After opening the common Q crossing, a full matching uses exactly one of these mixed curves on the pattern side. Indeed the four internal pattern alpha curves supply four distinct pattern beta coordinates, and there are five pattern beta curves. Exactly one further coordinate is needed there; it must lie on one of the two mixed curves. The other mixed curve supplies the missing companion coordinate. Thus the full matchings are precisely the three meridian-pattern matchings paired with companion meridian matchings and the sixteen longitude-pattern matchings paired with companion longitude matchings. This is the matching decomposition of the actual connected-surface curves, not an identification from group rank.

The meridian contributions are -1,-1,0 for ndhpf,ncgrf,ncgqe. All longitude contributions are as follows.

| Partial matching S | a(S) |
| --- | ---: |
| begkq | -1 |
| behlq | -1 |
| bfgkr | -2 |
| bfhlr | -2 |
| bfhmp | -1 |
| adgkq | -1 |
| adhlq | -1 |
| acgmq | 0 |
| a′dgkq | 0 |
| a′dhlq | 0 |
| a′cgmq | 1 |
| b′egkq | 0 |
| b′ehlq | 0 |
| b′fgkr | -1 |
| b′fhlr | -1 |
| b′fhmp | 0 |

Enumerating the choice on lambda and then the unused beta choices on alpha1,...,alpha4 gives exactly this list. Thus, once the anchor and companion admission are installed, the associated-graded Alexander-one group has ONLY the pattern matching a′cgmq. There are no other top pattern matchings to cancel and no higher pattern level. The six local rectangle cancellations used in the printed proof are unnecessary at this junction. In particular an unresolved differential in a lower Alexander level cannot produce a new associated-graded differential at level one by Gaussian elimination.

For completeness, the homogeneous equations at every vertex other than Q, normalized by D_W=0, have the exact kernel

    D = k P,    P=(-1,0,0,-1,0,-1,1,0,1,0).       (3)

This can be checked without trusting a numerical rank. The r, e, f equations give D3=D5, D8=D6, D4=D7=0. The a equation gives D5=-D6. The b equation then gives D1=0, and the d equation D2=0. The b′ equation gives D0=-D8=-D6, and the k equation gives D9=0. The remaining equations now vanish identically, proving (3). Taking k=1 supplies the nonzero primitive solution, so the normalized rank is exactly nine. Since P has both signs, a nonnegative D=kP is necessarily zero.

Apply this to any actual positive zero-w/zero-z domain between two full top states. Its C corners agree, so (3) applies, and positivity forces its entire C part to vanish. Therefore every actual top differential is supported entirely in the companion piece. This is a necessary geometric support statement, not an assertion that every formal companion domain is represented holomorphically.

There is a precise chosen-data count consequence when the actual glued datum has the split integrable product structure on configurations consisting of these five fixed C crossings and companion points. A holomorphic incidence branch entering any open C region would give that region positive degree; hence all five C branches stay constant. The remaining branches give exactly a companion solution, and adjoining the five constant branches gives its inverse construction. The linearized operator is the companion operator plus the five constant transverse-line strip operators; each extra summand is invertible. Thus regularity, index and isolated orbit count are unchanged for these chosen data. Transporting this equality to other data still needs the appropriate actual protected comparison. This argument neither supplies the missing companion count nor imports general-Y invariance.

The independent exact rational checker `check-c-top-sector.py` reconstructs all faces and equations from the signed cycles, verifies the integral dual identity (1), lists all16 matchings and particular solutions, and proves (3). Its output `c-top-sector.json` is finite region proof data. The checker returned PASS. No canonical item, original Statement, metadata, contract, manifest, gate, or acceptance record was changed.
