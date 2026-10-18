# Exact remaining affine translation helper

This note isolates the mathematical helper requested from the parent. It is not a proved supplier or acceptance record.

Use the dot affine action of `W_ell=W semidirect ell Q` on full simply-laced weight lattice `P`, with the shifted fundamental alcove `C={x: (x+rho,alpha_i)>0, (x+rho,theta)<ell}`. The parameter is `ord(zeta^2)=ell`, odd `ell>h`. Write `bar C` for its closed geometric alcove, and restrict its module labels to dominant integral weights. The tilting existence, unique highest labels, tensor closure, Weyl filtrations and affine linkage are established by the current proposals; parent is independently reviewing these.

Let `A` be an alcove inside the strict shifted dominant chamber, `F` a lower facet of `A` which is not a chamber boundary, `lambda` a dominant integral point in the relative interior of `F`, and `mu` a dominant integral point in the interior of `A`. Suppose `gamma` is the ordinary Weyl-dominant representative of `mu-lambda`, and `gamma` is in the dominant integral part of `bar C`. The desired conclusion is that `T(mu)` is a direct summand of `T(lambda) tensor Delta(gamma)`.

By the bottom-alcove simplicity argument (still to be supplied rigorously), `Delta(gamma)` is simple and tilting, with no lower Weyl sections. `T(lambda)` is singular and hence negligible by linkage and the Weyl qdim formula. The desired summand conclusion would make `T(mu)` negligible.

The exact sufficient orbit-order assertion is:

If `lambda'<=lambda` lies in `W_ell dot lambda`, and `nu` lies in `W_ell dot mu` and occurs as a classical highest constituent of `Delta(lambda') tensor Delta(gamma)`, then there is no `nu>mu`. (A stronger comparison saying `nu>=mu` forces `lambda'=lambda,nu=mu` would suffice but may be unnecessarily strong.) The constituent `mu` in `Delta(lambda) tensor Delta(gamma)` has multiplicity one.

The classical Racah argument gives the following distance information. Any classical constituent `nu` of a tensor at highest labels `lambda',gamma` satisfies `norm(nu-lambda')<=norm(gamma)`. Indeed a nonzero Racah summand has `w dot nu=lambda'+eta` for a weight `eta` of the classical module at `gamma`; finite Weyl chambers minimize distance between their representatives, so `norm(nu-lambda')<=norm(eta)<=norm(gamma)`. Equality forces `w=1` and `eta` an extremal Weyl weight, since shifted dominant labels are strictly regular. At `mu-lambda`, which is an extremal weight, this gives multiplicity one.

The affine closest-pair fact to verify/use is that for `x=lambda+rho` and `y=mu+rho` in a common closed alcove, every pair of independent affine images has distance at least `norm(x-y)`. Equality, when `x` is on just this one facet and `y` is interior, should force the two points into a common affine image of that alcove, with their relative action differing at most by reflection in the facet. This follows by folding a segment into a common fundamental alcove, but the equality case must be checked, not merely asserted.

Combining these distances forces a potential competing pair `(lambda',nu)` to be a common affine image of `(lambda,mu)` or of `(lambda,s_F dot mu)`. The outstanding issue is the dominance implication needed to rule out `lambda'<=lambda` and `nu>mu`. Weak dominance is weaker than affine Bruhat/strong linkage in higher rank; Sawin's sentence asserting this implication is not being treated as a proof. If actual strong linkage is necessary, it must be proved for the Weyl sections of tiltings or supplied by a genuine locally proved translation construction.

The displacement construction is separate and will be proved in a further note. It chooses `lambda` depending on `mu` and the facet; it does not use Sawin's false assertion that a fixed arbitrary facet point always gives displacement in the open bottom alcove. It allows the CLOSED bottom alcove, including simple negligible wall modules. In particular it handles E8 at odd ell=31, where the open bottom alcove has only the zero label.
