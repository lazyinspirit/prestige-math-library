# Owner analysis: the closed-surface Wu example

Status: a candidate local proof for group b to check and author after helper
b-1 finishes the local-coefficients A page. This note is not an item, a proof
contract or an owner `repaired` receipt. It preserves the original example
statement and all twenty-one pairs.

## Source and dependency boundary

Ranicki, *Algebraic and Geometric Surgery*, Definition 4.1(iii), printed p.49,
https://webhomes.maths.ed.ac.uk/~v1ranick/books/surgery.pdf, states that the
orientation character is the unique degree-one class whose cup product gives
`Sq^1` in top degree. Hatcher's correction to the last two paragraphs of
*Algebraic Topology* p.335,
https://pi.math.cornell.edu/~hatcher/AT/Pduality.pdf, states the twisted
fundamental-class and duality interfaces. Neither citation substitutes for
the chain calculation below. The scaffold's Mosher--Tangora Chapter 4
Section 1 locator must be removed.

The proof needs the published orientation local system and cover, the current
Bockstein and `Sq^1` suppliers, the current Wu-class definition, and b-1's
fully authored local-coefficient chains, cup/cap pairing and twisted
fundamental class. It also needs AC for a point-indexed choice of local
generators; add the direct `def-axiom-of-choice` dependency and state this in
the example. All later local-coefficient dependencies must be explicit on
the example item and on its B page's `forwardRefs` to the local-coefficients
A page, since `validate-plan` permits forward citations only from B leaves.

## Chain calculation to verify and transcribe

1. Write `O=O_M`. Its stalk `O_x` is infinite cyclic. Choose a generator
   `e_x` for every `x` using AC. The orientation transports give a covariant
   local system by b-1's proposition. For each singular edge `sigma:x->y`,
   let `epsilon(sigma)` be zero if `T_sigma e_x=e_y` and one if
   `T_sigma e_x=-e_y`. The cocycle identity follows from composition of
   transport around each singular 2-simplex. Replacing `e_x` by
   `(-1)^{t(x)}e_x` changes `epsilon` by `delta t`. Thus its class is the
   orientation-transport class `w_1(M)` independently of this AC choice.

2. The fibrewise bilinear map `O_x tensor O_x -> Z`, `e_x tensor e_x -> 1`,
   is independent of the sign of the generator: replacing `e_x` by `-e_x`
   changes both factors. It is transport-compatible, so b-1's cap definition
   gives a pairing from `O`-cochains and `O`-chains to ordinary integral
   chains. Its reduction is the ordinary mod-two cap product.

3. Let `C` be a finite twisted integral cycle representing the canonical
   class `[M]_O` directly from b-1's compact-support twisted fundamental-
   class lemma with `K=M`. The full twisted duality theorem is not needed
   for this example. Its mod-two reduction is the
   canonical `[M]_2`, because both restrict to the unique mod-two local
   generator at each point; confirm this uniqueness against the published
   fundamental-class supplier. Let `c` be the `O`-valued 0-cochain with
   `c(x)=e_x`, so its reduction is the constant mod-two cochain `1`.
   Since transport takes generators to signed generators, `delta c` is even
   on every singular edge. Put `b=(delta c)/2`, an `O`-valued 1-cocycle
   because the local cochain groups are torsion-free and `delta^2c=0`.
   In the first-vertex convention b-1 is using, `b(sigma)` is zero on a
   preserving edge and `+/- e_x` on a reversing edge; its reduction is
   exactly `epsilon`. Hence `rho[b]=w_1(M)`.

4. Set `Z=c cap C`, an ordinary integral 2-chain. Its mod-two reduction is
   `[M]_2`. The actual cap-boundary identity in b-1's definition, with
   `p=0` and `boundary C=0`, gives
   `boundary Z=-(delta c) cap C=-2(b cap C)`.
   For `0 -> Z --2--> Z -> F_2 -> 0`, the homology connecting class of
   `[M]_2` is represented by `(boundary Z)/2=-b cap C` in `H_1(M;Z)`.
   Reduction kills the sign, so
   `rho beta_*^Z [M]_2 = w_1(M) cap [M]_2` in `H_1(M;F_2)`.
   This calculation supplies, rather than cites, the needed identification
   of the orientation character with the mod-two boundary of the
   fundamental class. Check that b-1's cap convention retains the stated
   sign; only the mod-two conclusion is consumed.

5. For any `x in H^1(M;F_2)`, choose integral cochain and chain lifts of
   mod-two cocycle/cycle representatives. The identity
   `(delta x_tilde)(Z_tilde)=x_tilde(boundary Z_tilde)` shows directly after
   dividing by two and reducing modulo two that the mod-four cohomology
   Bockstein `Sq^1` is Kronecker-adjoint to the integral homology Bockstein
   followed by reduction. The coefficient map `Z -> Z/4` identifies its
   reduction with the `0 -> F_2 -> Z/4 -> F_2 -> 0` Bockstein already proved
   in the Bockstein A page. Therefore
   `<Sq^1 x,[M]_2> = <x,rho beta_*^Z[M]_2>
    = <w_1(M) cup x,[M]_2>`.
   The top-square identity says `Sq^1 x=x^2` in degree one. Nondegeneracy of
   the mod-two surface cup pairing, already used to define Wu classes,
   makes `v_1=w_1`.

6. The Wu-class definition gives `v_0=1` and `v_i=0` for `2i>2`, so only
   `i=1` can be positive. To show the orientability biconditional without a
   later Hurewicz theorem, if `w_1=0` choose a 0-cochain `t` with
   `epsilon=delta t`; changing each generator by `(-1)^{t(x)}` makes all
   singular-edge transports preserve it. This is a continuous global
   generator section, hence an orientation. Conversely a global orientation
   makes every edge sign zero. The empty surface is excluded by
   connectedness and the usual closed-surface convention; handle it
   explicitly if the manifest admits empty connected spaces.

No completed decision follows until the item, page, manifest, coverage,
contract and exact scope/item receipts are updated and all selected checks
pass. In particular the candidate use of b-1's theorem must be reviewed
against its finished proof, not its scaffold statement.
