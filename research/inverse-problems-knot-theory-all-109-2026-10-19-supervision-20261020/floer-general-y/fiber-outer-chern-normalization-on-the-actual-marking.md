# Fiber outer Chern normalization on the actual marking

The actual binding bridge and drilled diagram carry the oriented Seifert surface and its page framing. Set S=−F, with the orientation used for the sutured cut. Use the meridional boundary trivialization t_μ from the Alexander definition, not a trivialization transported from an unmarked closed diagram.

## The relative Euler obstruction

Represent a generator's relative Spin^c structure by its Morse vector field with the selected index-one/index-two trajectories removed and locally replaced by the standard nonvanishing fields. On S project its orthogonal plane field to TS away from these local trajectory patches. Its relative Euler obstruction is the sum of three contributions: the tangent Euler number χ(S); the half-index at each crossing of ∂S with a suture; and the rotation correction of the specified boundary trivialization. A crossing contributes −1/2: in the oriented sutured collar the positive and negative normal fields are joined by a half-turn opposite the positive tangent boundary rotation. The two meridional crossings therefore give I(S)=−1. The page longitude and the actual meridional collar frame have zero extra rotation relative to one another, so r(S,t_μ)=0. This uses the actual fiber marking; a different longitude framing would change this term.

For an outer field no selected trajectory pierces the interior of S. Hence its obstruction is χ(S)+I(S)−r(S,t_μ)=(1−2g)−1=−2g. At an interior coordinate of the adapted polygon, the Morse replacement has the local model of a trajectory piercing S once. The orthogonal two-plane frame on the boundary of that small patch turns twice positively relative to the outer model: one turn from each side of the removed trajectory tube. Its relative obstruction therefore increases by two. The patches are disjoint and all other local frames agree. If n_P(x) counts the generator coordinates in the polygon interior, additivity of the relative Euler obstruction gives

    ⟨c₁(s(x),t_μ),[−F]⟩ = −2g+2n_P(x),
    A_F(x) = ½⟨c₁(s(x),t_μ),[F]⟩ = g−n_P(x).

Thus no generator has Alexander degree greater than g, and its degree is g exactly when it is outer. The local sign is fixed by orienting S=−F and by the carried page longitude; reversing S reverses the Chern evaluation. This proves the absolute anchor, not merely a relative difference of Alexander gradings.

## The actual cut generator set

In the cut/double surface diagram, a generator cannot enter the forbidden copy of P: the α and β boundary conditions occupy its opposite copies. Every generator is therefore the unique lift of an outer generator, and every outer generator lifts. This correspondence preserves the ordered α/β intersection signs, since each intersection neighborhood is copied with its surface orientation. Consequently the Euler sum of the top Alexander module is exactly the signed intersection sum of the cut diagram. This is the generator-level identification used in the integral matrix reduction before asserting a signed differential comparison.
