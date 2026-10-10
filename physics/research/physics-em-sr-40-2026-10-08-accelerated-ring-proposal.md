# Accelerated ring proposal

Proposal only, run `physics-em-sr-40-2026-10-08`, after the parent confirmed writer drain and the stable batch-10 baseline. No native manifest, plan, readiness, task, item, import, ledger or engine write and no commit. The accompanying JSON contains the exact full before/after scaffold objects, their hashes, direct imported supplier pins and actual native consumer closure. Integration remains held for the root's exact-after review.

## Focused corrections

`pthm-sr-guided-ring-sagnac-delay` clause (i) confuses the dimensionless future unit observer `n` with the four-velocity `U=cn`. With `phi=phi0+Omega t`, differentiating the material worldline gives

$$\dot W=(c,-\Omega R\sin\phi,\Omega R\cos\phi,0),\quad\eta(\dot W,\dot W)=-c^2+\Omega^2R^2=-c^2/\gamma^2.$$

The proper-time supplier therefore gives `d tau=dt/gamma`. Thus

$$n={\gamma\over c}\dot W=\gamma(1,-\Omega R\sin\phi/c,\Omega R\cos\phi/c,0),\quad U=\gamma\dot W=cn,$$

and `eta(n,n)=−1`, `eta(U,U)=−c²`. On the ring worldsheet, `dot W=partial_t|varphi`, so `n=(gamma/c)partial_t|varphi` and `U=gamma partial_t|varphi`. Material curves have constant rotating label `varphi=phi−Omega t mod2pi`; they are integral curves of `n` after parametrization by `s=c tau`, and are the same unparametrized flow lines of the congruence when parametrized by chart time. Proper time is `tau=t/gamma+tau0`, including its additive origin.

Clause (iv) incorrectly calls rest lines “curves of constant rotating label.” The corrected worldsheet is explicitly `C={r=R,x3=x3_0}`, a two-dimensional timelike cylinder. Its material worldlines are constant-label curves, while its one-dimensional rest line field is spanned by

$$\partial_\varphi+{\Omega R^2\over c^2-\Omega^2R^2}\partial_t.$$

Thus a rest line on an angular lift obeys `dt/dvarphi=Omega R²/(c²−Omega²R²)`. For nonzero `Omega`, its label varies and one positive circuit has the signed time offset already promised. For zero `Omega` it is a `t=constant` circle and the offset is zero. Stating fixed height avoids incorrectly assigning dimension one to the full three-dimensional hypersurface `r=R` with unrestricted height. The ambient three-dimensional rest distribution is locally nonintegrable for nonzero `Omega`, but the cylinder's rank-one rest distribution is locally integrable and has global holonomy, nonvanishing exactly when `Omega != 0`. These are different assertions; the signal return calculation uses neither integrability conclusion.

The worked example's co-rotating **relative** angular rate is `(c/R)−3c/(5R)=2c/(5R)`. The counter-rotating signed relative rate is `−c/R−3c/(5R)=−8c/(5R)`, with magnitude `8c/(5R)`. The existing reunion times and all event, proper-time and holonomy values are correct and preserved.

## Full return and holonomy checks

The ideal guide assumption remains explicit: `C_±(t)=(ct,Rcos(phi0±ct/R),Rsin(phi0±ct/R),x3_0)` are adopted guided null curves; vacuum straight-ray postulates do not force these circular paths. Their tangents have time component `c`, Euclidean spatial length `c`, zero Lorentz norm and future orientation. The labels `+` and `−` mean positive and negative angular directions. They respectively mean co-/counter-rotation when `Omega>0`, switch meanings when `Omega<0`, and neither rotational label is preferred at `Omega=0`.

Equality of ring positions is equality of sine/cosine pairs, hence angular difference in `2pi Z`: use the exact addition/parity identities and the zero-set/quarter-turn suppliers to establish the equivalence. For `C_+`, `(c/R−Omega)t=2pi k`, giving `t=2pi kR/(c−Omega R)`. For `C_-`, `−(c/R+Omega)t=2pi k`; put `m=−k` to give the same meeting set in the form `t=2pi mR/(c+Omega R)`. This integer relabeling corrects the current strategy's missing minus sign. Mathematical all-real extensions have all integer meetings; actual signals emitted at `t=0` are the restrictions `t≥0`, with first positive meeting corresponding to positive winding magnitude one. Since `|Omega|R<c`, both denominators are strictly positive for all permitted signs of `Omega`. Therefore

$$t_+=\frac{2\pi R}{c-\Omega R},\quad t_-=\frac{2\pi R}{c+\Omega R},\quad\Delta t=t_+-t_-=\frac{4\pi\Omega R^2}{c^2-\Omega^2R^2},$$

$$\Delta\tau=\frac{\Delta t}{\gamma}=\frac{4\pi\Omega R^2}{c^2\sqrt{1-\Omega^2R^2/c^2}}.$$

The induced cylinder metric is `−D dt²+2Omega R² dt dvarphi+R² dvarphi²`, `D=c²−Omega²R²>0`. Orthogonality to the material tangent `partial_t` gives `−D dt+Omega R² dvarphi=0` for rest-line tangents. Integrating the constant coefficient over one positive angular circuit yields

$$\Delta t_h=\frac{2\pi\Omega R^2}{D}=\frac{\Delta t}{2},\quad\Delta\tau_h=\frac{\Delta t_h}{\gamma}=\frac{\Delta\tau}{2}.$$

The proper-time holonomy is the signed offset between events on the same material worldline after transporting local rest simultaneity around the ring. It does not assert a global one-way synchronization convention. These differences vanish at `Omega=0`, reverse sign under `Omega→−Omega`, and all four quantities have units of seconds. The guide, signal, detector and ideal-clock qualifications and the absence of measurements, statistical inference, interference, dispersion or apparatus claims are preserved verbatim.

For `Omega R/c=3/5`, `gamma=5/4`: `t+=5pi R/c`, `t−=5pi R/(4c)`, `Delta t=15pi R/(4c)`, `Delta tau=3pi R/c`, `Delta t_h=15pi R/(8c)`, `Delta tau_h=3pi R/(2c)`. The material reception angles are `3pi` and `3pi/4`; the listed events `(5pi R,−R,0,0)` and `(5pi R/4,−R/sqrt2,R/sqrt2,0)` are correct. The first-quadrant sign needed for `sin(pi/4)=cos(pi/4)=1/sqrt2` is supplied explicitly by the positive-sine result; parity/Pythagorean alone would leave a sign ambiguity. The added genuine trigonometric suppliers are published pinned mathematics on existing prerequisite pages, not a new pair.

## Interfaces left unchanged

Read `def-sr-proper-acceleration` and `lem-sr-hyperbolic-motion-worldline` in full. Their actual conventions agree with the correction: `U=cn`, `eta(U,U)=−c²`, `A=c² nabla_n n`, and hyperbolic `U=c(cosh theta,sinh theta,0,0)`. The ring's direct argument uses neither item's statement and adds no dependency on them. They have no identified ring-related interface defect and are left untouched. The ring's necessary earlier unit-congruence, proper-time and four-velocity statements were read, including the actual rigid-rotation supplier's fixed-height cylinder and rest-line generator. The parent owns separate flat-covariant-derivative and other supplier findings; this lane makes no unrelated repair.

## Sources and validation limits

Read the complete stable batch-10 notes and the exact ring/proper-acceleration/hyperbolic objects and relevant local supplier statements/strategies. Read the existing cached authoritative full-text Crowell §§8.1.1–8.1.3, printed pp165–166, on synchronization discrepancy and Sagnac geometry. This is bounded reading of the saved full text, not new network retrieval or a whole-book audit. Crowell's printed §8.1.3 changes from `2pi gamma r² omega` to `2A omega` without retaining gamma; it is contextual motivation, not the exact supplier for the finite-speed coefficient proved here. The proof is independently computed from the adopted null curves and proper-time formula. The existing secondary Wikipedia reference is preserved but no new reading of that website is claimed.

The JSON preserves physics scope, provenance, source URLs and dependency roles. Before/after hashes, direct suppliers, actual consumer closure, dimensional checks and exact rational witnesses are local proposal evidence only. They do not certify authored proofs, readiness, source gates or publication. Root review and integration remain pending.
